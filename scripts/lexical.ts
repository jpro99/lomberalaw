// Builds the minimal valid Lexical editorState JSON that Payload's
// richText field expects, from plain paragraph strings. Good enough
// for seed data; real editing happens in the Payload admin's actual
// rich text editor from here on.
export function lexicalParagraphs(paragraphs: string[]) {
  return {
    root: {
      type: 'root',
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
      children: paragraphs.map((text) => ({
        type: 'paragraph',
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        version: 1,
        children: [
          {
            type: 'text',
            text,
            format: 0,
            detail: 0,
            mode: 'normal',
            style: '',
            version: 1,
          },
        ],
      })),
    },
  }
}
