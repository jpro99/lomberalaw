/** Extract plain text from Payload Lexical rich text for JSON-LD answers. */
export function lexicalToPlainText(value: unknown): string {
  if (!value) return ''
  if (typeof value === 'string') return value.trim()
  if (typeof value !== 'object') return ''

  const root = (value as { root?: { children?: unknown[] } }).root
  if (!root?.children) return ''

  const walk = (nodes: unknown[]): string =>
    nodes
      .map((node) => {
        if (!node || typeof node !== 'object') return ''
        const n = node as { type?: string; text?: string; children?: unknown[] }
        if (n.type === 'text' && typeof n.text === 'string') return n.text
        if (Array.isArray(n.children)) return walk(n.children)
        return ''
      })
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim()

  return walk(root.children)
}
