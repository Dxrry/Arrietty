'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';

import {
    IconBars,
    IconClose,
    IconLogo,
    IconMoon,
    IconSun,
} from '../Other/Icons';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const currentMode = localStorage.getItem('darkMode');
        if (currentMode) {
            setDarkMode(currentMode === 'true');
        } else {
            const prefersDarkMode = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches;
            setDarkMode(prefersDarkMode);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="pb-12 md:pb-44">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-10"
                aria-label="Global"
            >
                <div className="flex items-center md:flex-1">
                    <Link
                        href="/"
                        className="-m-1.5 flex items-center p-1.5 text-xl md:text-2xl"
                    >
                        <IconLogo />
                        Arrietty
                    </Link>
                </div>
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 pr-8 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <IconBars />
                    </button>
                    <button
                        onClick={toggleDarkMode}
                        className="text-lg leading-6"
                    >
                        {darkMode ? <IconSun /> : <IconMoon />}
                    </button>
                </div>
                <div className="mt-1 hidden md:flex md:flex-1 md:justify-end md:gap-x-12">
                    <a href="#lucerne" className="luzern-anchor text-lg">
                        About
                    </a>
                    <Link
                        href="/example-blog-post"
                        className="luzern-anchor text-lg leading-6"
                    >
                        Blog
                    </Link>
                    <a
                        href="#lucerne"
                        className="luzern-anchor text-lg leading-6"
                    >
                        Typo
                    </a>
                    <button
                        onClick={toggleDarkMode}
                        className="text-lg leading-6"
                    >
                        {darkMode ? <IconSun /> : <IconMoon />}
                    </button>
                </div>
            </nav>
            <Dialog
                as="div"
                className="md:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 text-black dark:bg-luzern-900 dark:text-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a
                            href="#lucerne"
                            className="-m-1.5 flex items-center p-1.5 text-xl md:text-2xl"
                        >
                            <IconLogo />
                            Arrietty
                        </a>
                        <div className="flex">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 pr-7 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <IconClose />
                            </button>
                            <button
                                onClick={toggleDarkMode}
                                className="text-lg leading-6"
                            >
                                {darkMode ? <IconSun /> : <IconMoon />}
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 pl-1">
                                <a
                                    href="#lucerne"
                                    className="-mx-3 block px-3 py-2 text-base font-semibold leading-7"
                                >
                                    <span className="border-b-2 border-white hover:border-black dark:border-luzern-900 dark:hover:border-white hover:dark:text-white">
                                        About
                                    </span>
                                </a>
                                <Link
                                    href="/example-blog-post"
                                    className="-mx-3 block px-3 py-2 text-base font-semibold leading-7"
                                >
                                    <span className="border-b-2 border-white hover:border-black dark:border-luzern-900 dark:hover:border-white hover:dark:text-white">
                                        Blogs
                                    </span>
                                </Link>
                                <a
                                    href="#lucerne"
                                    className="-mx-3 block px-3 py-2 text-base font-semibold leading-7"
                                >
                                    <span className="border-b-2 border-white hover:border-black dark:border-luzern-900 dark:hover:border-white hover:dark:text-white">
                                        Tags
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Navbar;
