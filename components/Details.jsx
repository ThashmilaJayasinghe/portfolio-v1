import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon  } from '@heroicons/react/24/outline'
import Project1 from './Project1.jsx';
import Project2 from './Project2.jsx';
import Project6 from './Project6.jsx';

export default function Details({ open, setOpen, id, title, tech }) {

  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-45 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-brown-50 dark:bg-brown-200 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                <div className="bg-brown-50 dark:bg-brown-200 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <button onClick={() => setOpen(false)} className="absolute top-3 right-3">
                    <XMarkIcon className="h-6 w-6 text-brown-100 font-bold" aria-hidden="true" />
                  </button>  
                  <div className="sm:flex sm:items-start">                      
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" className="text-center mr-2 text-lg leading-6 text-fc-50 dark:text-fc-100 font-semibold">
                        {title}
                      </DialogTitle>
                      <div className="mt-2">
                        {(() => {
                          switch(id) {
                            case 1: return <Project1 />;
                            case 2: return <Project2 />;
                            case 6: return <Project6 />;
                            default: return <Project1 />;
                          }
                        })()}
                      </div>                      
                      <div className="mt-4">
                        {tech.map(t => 
                          <span class="bg-brown-75 dark:bg-brown-175 text-fc-50 dark:text-fc-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-brown-100">{t}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-brown-50 dark:bg-brown-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Source Code
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    data-autofocus
                  >
                    Demo
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
