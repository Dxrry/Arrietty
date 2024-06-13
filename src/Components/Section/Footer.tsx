import Link from 'next/link';
import { IconArrow } from '../Other/Icons';

export default function Footer() {
    return (
        <footer className="pt-40 md:pt-52">
            {/* <ScrollToTopButton /> */}
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 pb-10 md:space-y-16 md:px-10">
                <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <a
                            href="#lucerne"
                            className="text-xl text-black dark:text-white md:text-2xl"
                        >
                            Arrietty
                        </a>
                        <p className="mt-4 text-base">
                            A minimalist Next.js with TailwindCSS theme, ideally
                            designed for your personal blog use. You can access
                            and download it from{' '}
                            <a
                                href="https://github.com/Dxrry/Lucerne"
                                className="border-b-2 border-black text-black hover:border-luzern-blue hover:text-luzern-blue dark:border-white dark:text-white"
                            >
                                my GitHub repository
                            </a>
                            .
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 md:col-span-1 md:flex-row md:justify-end lg:col-span-2 lg:flex lg:flex-1 lg:grid-cols-4 lg:gap-x-12">
                        <ul className="mt-6 space-y-4 text-sm text-gray-700 dark:text-white">
                            <li>
                                <a
                                    href="https://facebook.com"
                                    className="flex items-center transition"
                                >
                                    <IconArrow />
                                    <span className="luzern-anchor ml-2">
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://telegram.org"
                                    className="flex items-center transition"
                                >
                                    <IconArrow />
                                    <span className="luzern-anchor ml-2">
                                        Telegram
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com"
                                    className="flex items-center transition"
                                >
                                    <IconArrow />
                                    <span className="luzern-anchor ml-2">
                                        GitHub
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-screen-xl space-y-8 px-4 pb-10 md:space-y-16 md:px-10">
                <div className="grid grid-cols-1 gap-8 border-t-2 pt-10 text-left dark:border-luzern-100 dark:border-opacity-10 md:grid-cols-3">
                    <div className="text-sm">
                        <a href="#lucerne" className="luzern-anchor">
                            © 2024 Dxrry
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-2 md:flex md:flex-1 md:grid-cols-4 md:justify-end md:gap-x-12">
                        <div className="grid grid-cols-1 gap-y-4 text-sm md:flex md:flex-1 md:justify-end md:gap-x-2">
                            <ul className="flex text-sm">
                                <li className="mr-4">
                                    <a
                                        href="#lucerne"
                                        className="luzern-anchor"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#lucerne"
                                        className="luzern-anchor"
                                    >
                                        Terms and Condition
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
