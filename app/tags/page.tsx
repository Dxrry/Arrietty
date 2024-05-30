import Header from '@/src/Components/Section/Header';
import Footer from '@/src/Components/Section/Footer';

import Home from '@/src/Components/Section/Tags';

import { getAllPosts } from '@/src/Libraries/Api';

export default function Main() {
    const allPosts = getAllPosts();

    return (
        <main>
            <Header />
            <Home />
            <Footer />
        </main>
    );
}
