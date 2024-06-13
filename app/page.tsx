import { getAllPosts } from '@/src/Libraries/Api';

import Header from '@/src/Components/Section/Header';
import Footer from '@/src/Components/Section/Footer';

import List from '@/src/Components/UI/List';

export default function Main() {
    const allPosts = getAllPosts();

    return (
        <main>
            <Header />
            <div className="relative isolate px-6 py-10 md:px-10">
                <div className="mx-auto max-w-7xl items-center justify-items-center md:max-w-7xl md:px-12 lg:px-36">
                    <div className="text-left">
                        <h1 className="text-4xl tracking-tight md:text-5xl lg:text-7xl">
                            Arrietty - a Minimalist Personal Blog Using Next.js
                        </h1>
                        <p className="mt-5 lg:max-w-5xl lg:py-8">
                            &quot;Arrietty&quot; is a minimalist personal blog
                            built using Next.js and TailwindCSS. Its design is
                            characterized by simplicity and elegance,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua, eu
                            feugiat pretium nibh ipsum.
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
                                src="/assets/img/hero.jpg"
                                alt="Hero"
                            />
                        </figure>
                    </div>
                </div>
            </div>
            {allPosts.length > 0 && (
                <List title="Recent Publications" articles={allPosts} />
            )}
            <Footer />
        </main>
    );
}
