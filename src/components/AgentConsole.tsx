import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import {
  AlertTriangle,
  Bot,
  Check,
  Copy,
  ExternalLink,
  Loader2,
  RotateCcw,
  Send,
  Sparkles,
  Terminal,
} from 'lucide-react';

import { WELCOME_TEXT } from '../lib/agent/knowledge';
import { Markdown } from '../lib/agent/markdown';
import { matchKnowledge } from '../lib/agent/router';
import type { AgentLink, AgentMode } from '../lib/agent/types';

/**
 * Base URL for /api/health and /api/chat. Empty (the default) means same-origin:
 * in production the Cloudflare Worker that serves this site also serves the API.
 * Under plain `vite` dev the probe gets index.html back, fails to parse, and the
 * console stays on its bundled knowledge base.
 */
const AGENT_API_URL: string = (import.meta.env.VITE_AGENT_API_URL ?? '')
  .toString()
  .replace(/\/+$/, '');

const HEALTH_TIMEOUT_MS = 3000;

interface MessageMetadata {
  source?: 'knowledge-base';
  links?: AgentLink[];
}

type ConsoleUIMessage = UIMessage<MessageMetadata>;

const PRESET_PROMPTS = [
  {
    label: 'Sprachflow: AI-operated exam prep',
    query: 'How was Sprachflow built and how is it supervised by AI?',
  },
  {
    label: 'GetBlitz: SEPA Instant payment gateway',
    query: 'What is GetBlitz and how does its SEPA instant payment architecture work?',
  },
  {
    label: 'Atmen: Carbon tracking & mass balance',
    query: 'What did Jacob build at Atmen Solutions for carbon accounting and mass balance?',
  },
  {
    label: 'Indicina: CTO leadership & ML wins',
    query: 'What did Jacob achieve as CTO and Co-Founder at Indicina?',
  },
  {
    label: 'Languages & stack',
    query: 'Which languages and stack does Jacob use?',
  },
  {
    label: 'Book an intro call',
    query: 'How do I book a 30-minute intro call with Jacob?',
  },
  {
    label: 'Location & availability',
    query: 'Where is Jacob based and what opportunities is he open to?',
  },
];

const welcomeMessage = (): ConsoleUIMessage => ({
  id: 'welcome',
  role: 'assistant',
  parts: [{ type: 'text', text: WELCOME_TEXT }],
  metadata: { source: 'knowledge-base' },
});

const messageText = (message: ConsoleUIMessage): string =>
  message.parts
    .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
    .map((part) => part.text)
    .join('');

let localMessageCount = 0;
const nextLocalId = (prefix: string): string => `${prefix}-${(localMessageCount += 1)}`;

const knowledgeReply = (query: string): ConsoleUIMessage => {
  const entry = matchKnowledge(query);
  return {
    id: nextLocalId(`kb-${entry.id}`),
    role: 'assistant',
    parts: [{ type: 'text', text: entry.text }],
    metadata: { source: 'knowledge-base', links: entry.links },
  };
};

export const AgentConsole: React.FC = () => {
  const [mode, setMode] = useState<AgentMode>('checking');
  const [modelLabel, setModelLabel] = useState('openrouter');
  const [input, setInput] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const feedRef = useRef<HTMLDivElement>(null);
  const hasScrolledRef = useRef(false);
  const lastQueryRef = useRef('');

  const transport = useMemo(
    () => new DefaultChatTransport<ConsoleUIMessage>({ api: `${AGENT_API_URL}/api/chat` }),
    [],
  );

  const { messages, setMessages, sendMessage, status, clearError } =
    useChat<ConsoleUIMessage>({
      id: 'portfolio-assistant',
      transport,
      messages: [welcomeMessage()],
      onError: (error) => {
        const rateLimited = /rate_limited|429/.test(error.message);
        setNotice(
          rateLimited
            ? 'Hourly message limit reached on the live model — answering from the knowledge base.'
            : "Couldn't reach the live model — answering from the knowledge base.",
        );
        setMessages((current) => [...current, knowledgeReply(lastQueryRef.current)]);
      },
    });

  const isBusy = status === 'submitted' || status === 'streaming';

  // Probe the worker once so the status pill and routing tell the truth.
  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const response = await fetch(`${AGENT_API_URL}/api/health`, {
          headers: { Accept: 'application/json' },
          signal: AbortSignal.timeout(HEALTH_TIMEOUT_MS),
        });
        const body = (await response.json()) as {
          ok?: boolean;
          configured?: boolean;
          model?: string;
        };
        if (cancelled) return;
        // `configured` is false until OPENROUTER_API_KEY is set on the Worker.
        if (response.ok && body.ok && body.configured) {
          if (body.model) {
            // "openrouter/free" is a meta-router — show it whole; otherwise the id's tail.
            setModelLabel(
              body.model.startsWith('openrouter/')
                ? body.model
                : (body.model.split('/').pop() ?? body.model),
            );
          }
          setMode('live');
          return;
        }
        setMode('offline');
      } catch {
        if (!cancelled) setMode('offline');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Scroll the feed, never the window — and not on first paint.
  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;
    if (!hasScrolledRef.current) {
      hasScrolledRef.current = true;
      return;
    }
    feed.scrollTop = feed.scrollHeight;
  }, [messages, status]);

  const handleSend = useCallback(
    (rawQuery: string) => {
      const query = rawQuery.trim();
      if (!query || isBusy) return;

      lastQueryRef.current = query;
      setInput('');
      setNotice(null);

      if (mode === 'live') {
        clearError();
        void sendMessage({ text: query });
        return;
      }

      setMessages((current) => [
        ...current,
        {
          id: nextLocalId('user'),
          role: 'user',
          parts: [{ type: 'text', text: query }],
        },
        knowledgeReply(query),
      ]);
    },
    [clearError, isBusy, mode, sendMessage, setMessages],
  );

  const handleCopy = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setNotice('Copying is blocked in this browser — select the text manually.');
    }
  }, []);

  const handleReset = useCallback(() => {
    clearError();
    setNotice(null);
    setMessages([welcomeMessage()]);
  }, [clearError, setMessages]);

  const isLive = mode === 'live';

  return (
    <section id="agent-console" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Bot size={14} />
            Ask the assistant
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Ask About My Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            An LLM grounded in my public profile — ventures, experience, stack, and
            availability. Ask anything; it will tell you when it doesn't know.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900/95 text-slate-100 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Terminal Header Bar */}
          <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-slate-800 bg-slate-950/80">
            <div className="flex min-w-0 items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 shrink-0" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 shrink-0" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 shrink-0" />
              <span className="ml-2 flex min-w-0 items-center gap-1.5 font-mono text-xs text-slate-400">
                <Terminal size={12} className="shrink-0" />
                <span className="truncate">ask-jacob :: portfolio-assistant</span>
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span
                className={`hidden sm:inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[11px] ${
                  isLive
                    ? 'border-emerald-800/50 bg-emerald-950/60 text-emerald-400'
                    : 'border-slate-700/60 bg-slate-900 text-slate-400'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isLive ? 'bg-emerald-400' : 'bg-slate-500'
                  }`}
                />
                {isLive ? `live · ${modelLabel}` : 'offline · knowledge base'}
              </span>
              <button
                type="button"
                onClick={handleReset}
                aria-label="Reset conversation"
                title="Reset conversation"
                className="rounded p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div
            ref={feedRef}
            aria-live="polite"
            className="max-h-[480px] space-y-4 overflow-y-auto p-4 font-sans sm:p-6"
          >
            {messages.map((message) => {
              const text = messageText(message);
              if (message.role === 'user') {
                return (
                  <div key={message.id} className="flex flex-col items-end">
                    <div className="max-w-[85%] min-w-0 break-words rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-md sm:max-w-[75%] sm:text-base">
                      {text}
                    </div>
                  </div>
                );
              }

              return (
                <div key={message.id} className="flex flex-col items-start">
                  <div className="max-w-[95%] min-w-0 rounded-2xl border border-slate-700/60 bg-slate-800/80 p-4 text-sm text-slate-200 shadow-lg sm:max-w-[90%] sm:p-5 sm:text-base">
                    {message.metadata?.source === 'knowledge-base' && (
                      <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-slate-500">
                        Source: knowledge base
                      </p>
                    )}

                    <Markdown>{text}</Markdown>

                    {message.metadata?.links && message.metadata.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-700/60 pt-3">
                        {message.metadata.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target={link.url.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="inline-flex min-w-0 items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/30"
                          >
                            <span className="truncate">{link.label}</span>
                            <ExternalLink size={12} className="shrink-0" />
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-800 pt-2 text-[11px] text-slate-400">
                      <span>Assistant</span>
                      <button
                        type="button"
                        onClick={() => void handleCopy(text, message.id)}
                        className="flex shrink-0 items-center gap-1 transition-colors hover:text-white"
                      >
                        {copiedId === message.id ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {isBusy && (
              <div className="flex w-fit items-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800/60 p-3 font-mono text-xs text-emerald-400">
                <Loader2 size={14} className="animate-spin" />
                <span>{status === 'streaming' ? 'Writing…' : 'Thinking…'}</span>
              </div>
            )}

            {notice && (
              <div className="flex w-fit max-w-full items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-950/40 p-3 text-xs text-amber-300">
                <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                <span className="min-w-0 break-words">{notice}</span>
              </div>
            )}
          </div>

          {/* Suggested Questions */}
          <div className="border-t border-slate-800/90 bg-slate-950/80 p-3 sm:px-5 sm:py-3.5">
            <div className="mb-2.5 flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <Sparkles size={13} className="text-emerald-400" />
              <span>Suggested questions (click to ask):</span>
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:overflow-visible">
              {PRESET_PROMPTS.map((prompt) => (
                <button
                  key={prompt.query}
                  type="button"
                  onClick={() => handleSend(prompt.query)}
                  disabled={isBusy}
                  className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border border-slate-700/70 bg-slate-800/90 px-3 py-1.5 text-left text-xs font-medium text-slate-200 transition-all hover:border-emerald-500/40 hover:bg-emerald-950/60 hover:text-emerald-300 active:scale-95 disabled:opacity-50 sm:whitespace-normal"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>{prompt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="border-t border-slate-800 bg-slate-950/95 p-3 sm:p-4">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                aria-label="Ask a question about Jacob's work"
                placeholder="Ask about Sprachflow, GetBlitz, Atmen, Indicina, or Jacob's stack…"
                className="min-w-0 flex-1 rounded-xl border border-slate-700/80 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 transition-colors placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none sm:text-base"
              />
              <button
                type="submit"
                disabled={!input.trim() || isBusy}
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white shadow-md shadow-emerald-900/40 transition-all hover:bg-emerald-500 active:scale-95 disabled:opacity-50"
              >
                <Send size={16} />
                <span className="hidden sm:inline">Ask</span>
              </button>
            </form>
          </div>
        </div>

        {mode === 'offline' && (
          <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
            Running from a curated knowledge base right now — the live model is not
            connected.
          </p>
        )}
      </div>
    </section>
  );
};
