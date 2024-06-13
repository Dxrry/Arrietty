import Link from 'next/link';
import { ArticleList } from '../../Interfaces/ArticleList';

type Props = {
    title: string;
    articles: ArticleList[];
};

export default function Articles({ title, articles }: Props) {
    return (
        <div className="relative isolate px-6 pb-10 md:px-8 lg:pt-6">
            <div className="mx-auto max-w-7xl items-center justify-items-center md:px-12 lg:px-36">
                <div className="pt-10 md:py-10">
                    <h2 className="article-group">{title}</h2>
                </div>
                {articles.map(article => (
                    <Link
                        href={'/article/' + article.slug}
                        key={article.slug}
                        className="article-list"
                    >
                        <div className="w-full pl-0.5 md:mr-6 md:flex-1 md:pl-0 md:pt-0.5">
                            <ul className="article-published">
                                <li className="mr-2">12 Mar, 2020</li>
                                <li className="mr-2">•</li>
                                <li className="mr-2">#{article.tag}</li>
                            </ul>
                            <div className="mx-auto py-2 text-left md:max-w-none">
                                <span className="article-title">
                                    {article.title}
                                </span>
                            </div>
                            <div className="mx-auto text-left text-sm md:max-w-none xl:text-base">
                                <span className="article-description">
                                    {article.description}
                                </span>
                            </div>
                        </div>
                        <div className="order-first w-full pb-5 pt-2 text-center md:order-last md:mt-4 md:max-w-48 md:pb-0 md:pt-0 md:text-left lg:max-w-64">
                            <figure className="max-w-full">
                                <img
                                    className="h-full w-full rounded-lg"
                                    src={article.thumbnail}
                                    alt={article.title}
                                />
                            </figure>
                        </div>
                    </Link>
                ))}
                <div className="mx-auto flex max-w-lg justify-center pt-6 lg:max-w-2xl">
                    <button className="luzern-button">Load More</button>
                </div>
            </div>
        </div>
    );
}
