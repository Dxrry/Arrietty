import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

const marked = new Marked({ gfm: true, breaks: true }).use(
    markedHighlight({
        langPrefix: 'luzern language-',
        highlight(code, lang, info) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
    }),
);

export async function markdownToHtml(markdown: string) {
    const result = await marked.parse(markdown);
    return result
        .toString()
        .replace(/disabled=""/g, 'aria-disabled="true"')
        .replace(/\===/g, '<br />\n');
}
