import Header from '@/src/Components/Section/Header';
import Footer from '@/src/Components/Section/Footer';

import "@/src/Styles/Components/UI/Article.css"

import { getAllPosts, getPostBySlug } from '@/src/Libraries/Api';
import { markdownToHtml } from '@/src/Libraries/Markdown';

import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export default async function ArticlePost({ params }: Params) {
    const article = getPostBySlug(params.slug);

    if (!article) {
        return notFound();
    }

    const content = await markdownToHtml(article.content || '');

    return (
        <main>
            <Header />
            <div className="relative isolate px-6 py-10 md:px-10">
                <div className="mx-auto max-w-7xl items-center justify-items-center md:max-w-7xl md:px-12 lg:px-36">
                    <div className="text-left">
                        <ul className="flex pb-5 text-sm md:text-base lg:pb-10 lg:text-xl">
                            <li className="luzern-anchor mr-4">Home</li>
                            <li className="mr-4">•</li>
                            <li className="luzern-anchor mr-4">Article</li>
                            <li className="mr-4">•</li>
                            <li className="luzern-anchor mr-4">
                                {article.tag.charAt(0).toUpperCase() +
                                    article.tag.slice(1)}
                            </li>
                        </ul>
                        <h1 className="text-4xl tracking-tight md:text-5xl lg:text-7xl">
                            {article.title}
                        </h1>
                        <p className="mt-5 leading-snug lg:max-w-5xl lg:py-8">
                            {article.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative isolate px-6 py-4 md:px-10">
                <div className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
                    <div className="w-full text-center">
                        <figure className="max-w-full">
                            <img
                                className="w-full rounded-lg md:rounded-2xl"
                                src={article.thumbnail}
                                alt={article.title}
                            />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="relative isolate px-6 py-4 pb-20 pt-10 md:px-10 md:pt-20">
                <div className="mx-auto max-w-7xl items-center justify-items-center md:max-w-7xl md:px-12 lg:px-36">
                    <div
                        className="article-content text-left"
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                </div>
            </div>
            <div className="relative isolate px-6 md:px-10 md:py-10">
                <div className="mx-auto max-w-7xl items-center justify-items-center md:max-w-7xl md:px-12 lg:px-36">
                    <div className="text-left">
                        <ul className="flex pb-5 text-sm md:text-base lg:pb-10 lg:text-lg">
                            <li className="luzern-anchor-border mr-8">
                                #{article.tag}
                            </li>
                            <li className="luzern-anchor-border mr-8">
                                #{article.tag}
                            </li>
                            <li className="luzern-anchor-border mr-8">
                                #{article.tag}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* {allPosts.length > 0 && <List title="Related Posts" articles={allPosts} />} */}
            <Footer />
        </main>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: Params): Metadata {
    const article = getPostBySlug(params.slug);

    if (!article) {
        return notFound();
    }

    const title = `${article.title} | Next.js Blog Example with`;

    return {
        title,
        openGraph: {
            title,
            images: [article.thumbnail],
        },
    };
}

export async function generateStaticParams() {
    const articles = getAllPosts();

    return articles.map(article => ({
        slug: article.slug,
    }));
}
