'use client'

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import Confirmation from './Confirmation.jsx';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form data: ", formData);
    setFormData({ name: '', email: '', message: '' });

    emailjs.init('6NjwdFZSJbHVb8VeQ');

    emailjs
      .send('service_zhqj6oy', 'template_c8z45kv', {
        name: formData.name,
        message: formData.message,
        email: formData.email
        })
      .then(
        () => {
          // console.log('SUCCESS!');
          setSuccess(true);
          setOpen(true);
        },
        (error) => {
          // console.log('FAILED...', error.text);
          setSuccess(false);
          setOpen(true);
        },
      );
  }

  return (
    <div id="contact" className="bg-brown-50 dark:bg-brown-200 py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2.5 text-center text-3xl font-bold tracking-tight text-fc-50 dark:text-fc-100 sm:text-4xl">Contact me</h2>
        {/* <p className="text-center text-lg leading-8 text-fc-50 dark:text-fc-100">
          I hope to find an internship something something what am I looking for?.
        </p> */}
        {/* two column layout */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-auto gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-10">
          {/* Contact Details */}
          <div className="lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="mx-auto lg:max-w-lg">               
              <div className="isolate rounded-md bg-brown-50 shadow-xl border border-brown-75 dark:bg-brown-200 mt-10 px-6 py-8 sm:py-6 lg:px-8">  
                <div className="mx-auto max-w-xl gap-x-8 gap-y-6">         
                  <div>
                    <div className="flex justify-center items-center dark:invert">                
                      <img                            
                        src="paper-plane.svg"
                        alt="Transistor"
                        width={142}              
                      />
                    </div>
                  </div> 
                  <div className="mt-4">
                    <h3 className="text-center text-fc-50 dark:text-fc-100 text-2xl font-semibold">Thashmila Jayasinghe</h3>
                    <p className="text-center text-lg text-fc-50 dark:text-fc-100">Colombo, Sri Lanka</p>
                  </div>   
                  <div className="mt-10 text-center text-fc-50 dark:text-fc-100">                        
                    <p>I'm seeking internship opportunities to further develop my skills and contribute to innovative projects.</p>
                  </div>  
                  <div className="mt-8 text-center text-fc-50 dark:text-fc-100 text-3xl font-semibold">
                    <p className="mb-2">Connect with me</p>                    
                    <div className="flex items-center justify-center space-x-3">                      
                      <a href="mailto:thashmilajayasinghe@gmail.com" className="w-10 h-10 rounded-md bg-brown-150 px-1.5 py-1.5 shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
                        <img
                          className=""
                          src="email2.svg"
                          alt="Email"                                            
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/thashmila-jayasinghe/" target="_blank" className="w-10 h-10 rounded-md bg-brown-150 px-1.5 py-1.5 shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
                        <img
                          className=""
                          src="linkedin2.svg"
                          alt="LinkedIn"                            
                        />
                      </a>
                      <a href="https://github.com/ThashmilaJayasinghe" target="_blank" className="w-10 h-10 rounded-md bg-brown-150 px-1.5 py-1.5 shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
                        <img
                          className=""
                          src="github3.svg"
                          alt="GitHub"                            
                        />
                      </a>
                      <a href="https://leetcode.com/thashmilajayasinghe/" target="_blank" className="w-10 h-10 rounded-md bg-brown-150 px-1.5 py-1.5 shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
                        <img
                          className=""
                          src="leetcode2.svg"
                          alt="Leetcode"
                        />
                      </a>   
                      <a href="https://medium.com/@thashmilajayasinghe" target="_blank" className="w-10 h-10 rounded-md bg-brown-150 px-1.5 py-1.5 shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
                        <img
                          className=""
                          src="medium2.svg"
                          alt="Medium"
                        />
                      </a>                      
                    </div>                     
                  </div>                    
                </div>               
              </div>
            </div>            
          </div>
          {/* Contact Form */}        
          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">  
            <Confirmation open={open} setOpen={setOpen} success={success} />          
            <div className="g:max-w-lg">                
              <div className="isolate rounded-md bg-brown-50 dark:bg-brown-200 shadow-xl border border-brown-75 mt-10 px-6 py-9 sm:py-7 lg:px-8">                  
                <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
                  <div className="gap-x-8 gap-y-6">         
                    <div className="mt-3">
                      <label htmlFor="name" className="block text-base leading-6 text-fc-50 dark:text-fc-100">
                        Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="name"
                          id="name"                            
                          className="bg-brown-25 dark:bg-brown-175 shadow-inner block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-150 sm:text-sm sm:leading-6"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>                      
                    <div className="mt-3">
                      <label htmlFor="email" className="block text-base leading-6 text-fc-50 dark:text-fc-100">
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"                
                          className="bg-brown-25 dark:bg-brown-175 shadow-inner block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-150 sm:text-sm sm:leading-6"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>                  
                    <div className="mt-3">
                      <label htmlFor="message" className="block text-base leading-6 text-fc-50 dark:text-fc-100">
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          className="bg-brown-25 dark:bg-brown-175 shadow-inner block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-150 sm:text-sm sm:leading-6"
                          defaultValue={''}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 mb-4">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-brown-150 px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150"
                    >
                      Let's talk
                    </button>
                  </div>
                </form>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
}