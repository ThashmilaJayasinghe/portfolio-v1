'use client'

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div id="contact" className="bg-brown-50 py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2.5 text-center pb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact me</h2>
        <p className="text-center text-lg leading-8 text-gray-900">
          I've been doing web development for about 3 years now, and I'm always eager to learn more in this fast paced industry.
        </p>
        {/* two column layout */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* Contact Details */}
          <div className="lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">               
                <div className="isolate rounded-md bg-white mt-10 px-6 py-8 sm:py-6 lg:px-8">  
                  <div className="mx-auto max-w-xl gap-x-8 gap-y-6">         
                    <div>
                      <div className="flex justify-center items-center">                
                        <img                            
                          src="paper-plane.svg"
                          alt="Transistor"
                          width={140}              
                        />
                      </div>
                    </div> 
                    <div className="mt-5">
                      <h3 className="text-center text-gray-900 text-2xl font-semibold">Thashmila Jayasinghe</h3>
                      <p className="text-center text-lg text-gray-900">Colombo, Sri Lanka</p>
                    </div>   
                    <div className="mt-10 text-center text-gray-900">                        
                      <p>I hope to find an internship something something what am I looking for?</p>
                    </div>  
                    <div className="mt-10 text-center text-gray-900 text-3xl font-semibold">
                      <p>Connect with me</p>
                      <div className="mx-auto mt-2.5 grid max-w-min grid-cols-8 items-center gap-x-2 gap-y-10 sm:max-w-xl sm:grid-cols-8 sm:gap-x-2 lg:mx-0 lg:max-w-none lg:grid-cols-8">
                        <a href="mailto:thashmilajayasinghe@gmail.com" className="col-start-3 rounded-md bg-brown-150 px-1.5 py-1.5 shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
                          <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="email-outline.svg"
                            alt="Email"
                            width={158}
                            height={48}                   
                          />
                        </a>
                        <a href="https://www.linkedin.com/in/thashmila-jayasinghe/" target="_blank" className="rounded-md bg-brown-150 px-1.5 py-1.5 shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
                          <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="linkedin.svg"
                            alt="LinkedIn"
                            width={158}
                            height={48}
                          />
                        </a>
                        <a href="https://github.com/ThashmilaJayasinghe" target="_blank" className="rounded-md bg-brown-150 px-1.5 py-1.5 shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
                          <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="github-outline.svg"
                            alt="GitHub"
                            width={158}
                            height={48}
                          />
                        </a>
                        <a href="https://medium.com/@thashmilajayasinghe" target="_blank" className="rounded-md bg-brown-150 px-1.5 py-1.5 shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-150">
                          <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="medium.svg"
                            alt="Medium"
                            width={158}
                            height={48}
                          />
                        </a>                      
                      </div>
                    </div>                    
                  </div>               
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}        
          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">                
                <div className="isolate rounded-md bg-white mt-10 px-6 py-9 sm:py-7 lg:px-8">                  
                  <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
                    <div className="gap-x-8 gap-y-6">         
                      <div className="mt-3">
                        <label htmlFor="name" className="block text-base leading-6 text-gray-900">
                          Name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="name"
                            id="name"                            
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-150 sm:text-sm sm:leading-6"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>                      
                      <div className="mt-3">
                        <label htmlFor="email" className="block text-base leading-6 text-gray-900">
                          Email
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="email"
                            name="email"
                            id="email"                
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-150 sm:text-sm sm:leading-6"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>                  
                      <div className="mt-3">
                        <label htmlFor="message" className="block text-base leading-6 text-gray-900">
                          Message
                        </label>
                        <div className="mt-2.5">
                          <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-150 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-11 mb-3">
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
    </div>
  )
}