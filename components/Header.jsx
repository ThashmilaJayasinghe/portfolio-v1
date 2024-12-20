'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  Dialog,
  DialogPanel,
  Popover,
} from '@headlessui/react';
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [top, setTop] = useState(true);
  const {theme, setTheme} = useTheme();
  const [preferredTheme, setPreferredTheme] = useState( theme || 'light');

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]); 

  return (
    <header className={`h-[11vh] w-screen bg-brown-50 dark:bg-brown-200 fixed z-10 top-0 ${!top && !mobileMenuOpen && 'shadow'}`}>
      <div className="fixed right-2 bottom-4 flex items-center">
        <button onClick={() => {
          const newTheme = preferredTheme === 'dark' ? 'light' : 'dark';
          setTheme(newTheme);
          setPreferredTheme(newTheme);
        }}>
          {preferredTheme === 'light' ? (
            <MoonIcon className="h-6 w-6 text-fc-50" aria-hidden="true" />
          ) : (
            <SunIcon className="h-6 w-6 text-fc-100" aria-hidden="true" />
          )}
        </button>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#hero" className="-m-1.5 p-1.5 text-fc-50 dark:text-fc-100">
            Thashmila Jayasinghe
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-fc-50 dark:text-fc-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">
          <a href="#about" className="text-sm font-semibold leading-8 text-fc-50 dark:text-fc-100">
            About
          </a>        
          <a href="#skills" className="text-sm font-semibold leading-8 text-fc-50 dark:text-fc-100">
            Skills
          </a>
          <a href="#projects" className="text-sm font-semibold leading-8 text-fc-50 dark:text-fc-100">
            Projects
          </a>
          <a href="#contact" className="text-sm font-semibold leading-8 text-fc-50 dark:text-fc-100">
            Contact
          </a>          
          <a href="https://drive.google.com/file/d/1-JgbzrqZwDgVPP3K9kCMmj3qIHYULCbT/view?usp=sharing" target="_blank" download="Thashmila_Jayasinghe_resume.pdf" className="rounded-md bg-brown-150 px-3.5 text-sm leading-8 text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
            Resume
          </a>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-brown-50 dark:bg-brown-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-brown-150/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 text-fc-50 dark:text-fc-100">
              <span className="sr-only">Thashmila Jayasinghe</span>        
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-fc-50 dark:text-fc-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-fc-50 dark:text-fc-100 hover:bg-brown-75 dark:hover:bg-brown-175"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-fc-50 dark:text-fc-100 hover:bg-brown-75 dark:hover:bg-brown-175"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-fc-50 dark:text-fc-100 hover:bg-brown-75 dark:hover:bg-brown-175"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-fc-50 dark:text-fc-100 hover:bg-brown-75 dark:hover:bg-brown-175"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="https://drive.google.com/file/d/1-JgbzrqZwDgVPP3K9kCMmj3qIHYULCbT/view?usp=sharing"
                  target="_blank"
                  download="Thashmila_Jayasinghe_resume.pdf"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-fc-50 dark:text-fc-100 hover:bg-brown-75 dark:hover:bg-brown-175 dark:hover:bg-brown-175 dark:hover:bg-brown-175"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
