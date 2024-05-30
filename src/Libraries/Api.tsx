import { ArticleList } from '@/src/Interfaces/ArticleList';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'src/Articles');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return { ...data, slug: realSlug, content } as ArticleList;
    } catch (error) {
        return null;
    }
}

export function getAllPosts(): ArticleList[] {
    const slugs = getPostSlugs();
    const articles = slugs
        .map(slug => getPostBySlug(slug))
        .filter((article): article is ArticleList => article !== null)
        .sort((articleOne, articleTwo) => {
            if (!articleOne.date || !articleTwo.date) {
                return 0;
            }
            return articleOne.date > articleTwo.date ? -1 : 1;
        });
    return articles;
}
