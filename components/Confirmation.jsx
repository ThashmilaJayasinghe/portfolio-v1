import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon  } from '@heroicons/react/24/outline'

export default function Confirmation({ open, setOpen, success }) {

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
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex items-center justify-center bg-brown-50 dark:bg-brown-200 px-4 pb-2 pt-5 sm:p-6 sm:pb-2">                   
                  <div className="sm:flex sm:items-start">                      
                    {success ? (
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                        <img className="self-center inline max-h-10 mb-4 dark:invert" src="thumbs-up.svg"/>
                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-fc-50 dark:text-fc-100">
                          Message Received!
                        </DialogTitle>                                            
                      </div>
                    ) : (
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                        <img className="self-center inline max-h-10 mb-4 dark:invert" src="thumbs-down.svg"/>
                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-fc-50 dark:text-fc-100">
                          Uh oh! There seems to be a problem. Please try resubmitting your message.
                        </DialogTitle>                                            
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-brown-50 dark:bg-brown-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-brown-150 hover:bg-brown-100 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Close
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
