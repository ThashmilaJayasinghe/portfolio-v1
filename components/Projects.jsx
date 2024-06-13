'use client'

import { useState } from 'react';
import Details from './Details.jsx';
import projects from '../app/project-data.js';

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <div id="projects" className="bg-brown-50 dark:bg-brown-200 py-24 sm:py-24">      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2 text-fc-50 dark:text-fc-100">Projects</h2>          
          {/* <p className="mt-2 text-lg leading-8 text-fc-50 dark:text-fc-100">
            These are my projects.
          </p> */}
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 pt-3 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <>
            <Details open={open} setOpen={setOpen} title={project.title} description={project.description} tech={project.tech} />
            <article key={project.id} className="group relative bg-brown-75 dark:bg-brown-175 shadow-md rounded-md p-1 flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center justify-center w-full group-hover:opacity-75 transition duration-300 ease-in-out">                
                <img
                  // className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={project.imageUrl}
                  alt="Project"
                  width={158}
                  height={48}
                />
              </div>
              <div className="group-hover:opacity-75 transition duration-300 ease-in-out">
                <h3 className="mt-2 ml-2 text-lg font-semibold leading-6 text-fc-50 dark:text-fc-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                  {project.title}                
                </h3>
                {/* <p className="mt-1 ml-2 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-500">{project.tech}</p> */}
                {project.tech.map(t => 
                  <span class="bg-brown-50 text-fc-50 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-brown-200 dark:text-fc-100 border border-brown-100">{t}</span>
                )}
              </div> 
              <button onClick={() => setOpen(true)} className="absolute inset-x-0 bottom-0 py-4 px-4 text-center text-white bg-brown-150 hover:bg-brown-100 font-medium rounded-md transition duration-300 ease-in-out group-hover:opacity-100 opacity-0">
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
