'use client'

const projects = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl: '/hand.svg'
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl: '/hand.svg'
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl: '/hand.svg'
  },
  
  // More posts...
]

import { useState } from 'react';
import Details from './Details.jsx';

export default function Projects() {
  const [open, setOpen] = useState(false)

  return (
    <div id="projects" className="bg-white py-20 sm:py-32">      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>          
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <>
            <Details open={open} setOpen={setOpen} title={project.title} description={project.description} />
            <article key={project.id} className="group relative border border-indigo-600 rounded-md p-1 flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center group-hover:opacity-75 transition duration-300 ease-in-out">                
                <img
                  // className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={project.imageUrl}
                  alt="Transistor"
                  width={158}
                  height={48}
                />
              </div>
              <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {project.title}                
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
              </div> 
              <button onClick={() => setOpen(true)} className="absolute inset-x-0 bottom-0 py-4 px-4 text-center text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md transition duration-300 ease-in-out group-hover:opacity-100 opacity-0">
                View Details
              </button>                           
            </article>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
