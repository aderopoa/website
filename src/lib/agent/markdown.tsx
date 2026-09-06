import React from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';

/** Existing markdown links, inline code and autolinks — left untouched. */
const PROTECTED_SEGMENT = /(`[^`]*`|\[[^\]]*\]\([^)]*\)|<[^>]*>)/g;
const BARE_URL = /https?:\/\/[^\s<>()[\]"'`]+/g;

/**
 * Turns bare `https://…` into `[https://…](https://…)` so react-markdown links
 * it. We do this instead of pulling in remark-gfm just for autolink literals.
 */
const autolink = (markdown: string): string =>
  markdown
    .split(PROTECTED_SEGMENT)
    .map((segment, index) => {
      // Odd indices are the captured separators, i.e. already-linked content.
      if (index % 2 === 1) return segment;
      return segment.replace(BARE_URL, (url) => {
        const trimmed = url.replace(/[.,;:!?]+$/, '');
        return `[${trimmed}](${trimmed})${url.slice(trimmed.length)}`;
      });
    })
    .join('');

const components: Components = {
  p: ({ children }) => <p className="leading-relaxed">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc pl-5 space-y-1 marker:text-emerald-400">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 space-y-1 marker:text-emerald-400">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  em: ({ children }) => <em className="italic text-slate-100">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-400 underline decoration-emerald-500/40 underline-offset-2 hover:text-emerald-300 hover:decoration-emerald-400 break-words"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded bg-slate-950/80 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300 break-words">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="overflow-x-auto rounded-lg bg-slate-950/80 p-3 font-mono text-xs text-slate-200">
      {children}
    </pre>
  ),
  h1: ({ children }) => <h4 className="font-semibold text-white">{children}</h4>,
  h2: ({ children }) => <h4 className="font-semibold text-white">{children}</h4>,
  h3: ({ children }) => <h4 className="font-semibold text-white">{children}</h4>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-emerald-500/40 pl-3 text-slate-300">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-slate-700/60" />,
};

interface MarkdownProps {
  children: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ children }) => (
  <div className="min-w-0 space-y-2 break-words text-slate-200">
    <ReactMarkdown components={components}>{autolink(children)}</ReactMarkdown>
  </div>
);
