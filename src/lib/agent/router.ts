import { FALLBACK_ENTRY, KNOWLEDGE_ENTRIES } from './knowledge';
import type { KnowledgeEntry } from './types';

/**
 * Lowercases, turns hyphens and punctuation into spaces, and pads the result
 * with spaces so a `' phrase '` substring test is a word-boundary match.
 *
 * 'open-source SEPA' -> ' open source sepa '
 */
const normalize = (value: string): string =>
  ` ${value
    .toLowerCase()
    .replace(/[^a-z0-9+#]+/g, ' ')
    .trim()} `;

/**
 * Scores every entry by how many of its keywords appear in the query as whole
 * words, and returns the best match. Ties go to the higher-priority entry;
 * a score of zero returns the fallback.
 *
 * Behaviour this needs to keep (the old substring routing got all of these
 * wrong):
 *
 *   query                                          -> entry
 *   'Which programming languages does Jacob use?'  -> skills
 *   'Which languages and stack does Jacob use?'    -> skills
 *   'How technically deep is the team?'            -> indicina  (not booking)
 *   'example'                                      -> fallback  (not sprachflow)
 *   'open-source SEPA'                             -> getblitz
 *   'book a call'                                  -> booking
 *   'Where is Jacob based?'                        -> location
 *   'What is a vector database?'                   -> skills    (not indicina)
 */
export const matchKnowledge = (query: string): KnowledgeEntry => {
  const haystack = normalize(query);
  if (haystack.trim() === '') return FALLBACK_ENTRY;

  let best: KnowledgeEntry = FALLBACK_ENTRY;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_ENTRIES) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (haystack.includes(normalize(keyword))) score += 1;
    }

    if (score === 0) continue;
    if (score > bestScore || (score === bestScore && entry.priority > best.priority)) {
      best = entry;
      bestScore = score;
    }
  }

  return best;
};
