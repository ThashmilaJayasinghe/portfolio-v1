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
        {/* <SunIcon className="h-6 w-6" aria-hidden="true" />
        <input
          className="mx-1 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          id="flexSwitchCheckDefault" />
        <MoonIcon className="h-6 w-6" aria-hidden="true" /> */}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'light' ? (
            <MoonIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <SunIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#hero" className="-m-1.5 p-1.5">
            Thashmila Jayasinghe
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:justify-end">
          <a href="#about" className="text-sm font-semibold leading-8 text-gray-900">
            About
          </a>        
          <a href="#skills" className="text-sm font-semibold leading-8 text-gray-900">
            Skills
          </a>
          <a href="#projects" className="text-sm font-semibold leading-8 text-gray-900">
            Projects
          </a>
          <a href="#contact" className="text-sm font-semibold leading-8 text-gray-900">
            Contact
          </a>          
          <a href="https://drive.google.com/file/d/1-JzkJh84wZtg05mSMZhHSucXvrlcuZCb/view?usp=sharing" target="_blank" download="Thashmila_Jayasinghe_resume.pdf" className="rounded-md bg-brown-150 px-3.5 text-sm leading-8 text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
            Resume
          </a>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-brown-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-brown-150/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Thashmila Jayasinghe</span>        
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-brown-75"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-brown-75"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-brown-75"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-brown-75"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="https://drive.google.com/file/d/1-JzkJh84wZtg05mSMZhHSucXvrlcuZCb/view?usp=sharing"
                  target="_blank"
                  download="Thashmila_Jayasinghe_resume.pdf"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-brown-75"
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
