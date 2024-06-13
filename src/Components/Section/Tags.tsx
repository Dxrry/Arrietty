import Link from 'next/link';
import List from '../UI/List';
import { getAllPosts } from '../../Libraries/Api';

export default function Home() {
    const allPosts = getAllPosts();
    return (
        <div className="relative isolate px-6 py-4 md:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
                <div className="tags-list w-full">
                    <div className="grid grid-cols-1 gap-4 px-10 sm:grid-cols-2 lg:grid-cols-3">
                        <article className="overflow-hidden pt-10 transition">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="h-auto w-80 rounded-xl object-cover"
                            />
                            <div className="bg-white pt-6">
                                <a href="#">
                                    <h1 className="text-2xl text-gray-900">
                                        #reactjs
                                    </h1>
                                </a>
                                <p className="mt-4 line-clamp-3 text-base text-gray-500">
                                    4 Posts
                                </p>
                            </div>
                        </article>
                        <article className="overflow-hidden pt-10 transition">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="h-auto w-80 rounded-xl object-cover"
                            />
                            <div className="bg-white pt-6">
                                <a href="#">
                                    <h1 className="text-2xl text-gray-900">
                                        #reactjs
                                    </h1>
                                </a>
                                <p className="mt-4 line-clamp-3 text-base text-gray-500">
                                    4 Posts
                                </p>
                            </div>
                        </article>
                        <article className="overflow-hidden pt-10 transition">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="h-auto w-80 rounded-xl object-cover"
                            />
                            <div className="bg-white pt-6">
                                <a href="#">
                                    <h1 className="text-2xl text-gray-900">
                                        #reactjs
                                    </h1>
                                </a>
                                <p className="mt-4 line-clamp-3 text-base text-gray-500">
                                    4 Posts
                                </p>
                            </div>
                        </article>
                        <article className="overflow-hidden pt-10 transition">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="h-auto w-80 rounded-xl object-cover"
                            />
                            <div className="bg-white pt-6">
                                <a href="#">
                                    <h1 className="text-2xl text-gray-900">
                                        #reactjs
                                    </h1>
                                </a>
                                <p className="mt-4 line-clamp-3 text-base text-gray-500">
                                    4 Posts
                                </p>
                            </div>
                        </article>
                        <article className="overflow-hidden pt-10 transition">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="h-auto w-80 rounded-xl object-cover"
                            />
                            <div className="bg-white pt-6">
                                <a href="#">
                                    <h1 className="text-2xl text-gray-900">
                                        #reactjs
                                    </h1>
                                </a>
                                <p className="mt-4 line-clamp-3 text-base text-gray-500">
                                    4 Posts
                                </p>
                            </div>
                        </article>
                        <article className="overflow-hidden pt-10 transition">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="h-auto w-80 rounded-xl object-cover"
                            />
                            <div className="bg-white pt-6">
                                <a href="#">
                                    <h1 className="text-2xl text-gray-900">
                                        #reactjs
                                    </h1>
                                </a>
                                <p className="mt-4 line-clamp-3 text-base text-gray-500">
                                    4 Posts
                                </p>
                            </div>
                        </article>
                        <article className="overflow-hidden pt-10 transition">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="h-auto w-80 rounded-xl object-cover"
                            />
                            <div className="bg-white pt-6">
                                <a href="#">
                                    <h1 className="text-2xl text-gray-900">
                                        #reactjs
                                    </h1>
                                </a>
                                <p className="mt-4 line-clamp-3 text-base text-gray-500">
                                    4 Posts
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
