import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function About() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-brown-50 dark:bg-brown-200 px-6 py-24 sm:py-24 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">        
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-fc-50 dark:text-fc-100 sm:text-4xl">About me</h2>
              <p className="mt-6 text-xl leading-8 text-fc-50 dark:text-fc-100">
              Hello! I'm Thashmila, a passionate software engineering student 
              fascinated by the intersection of Artificial Intelligence and web development. 
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-12 lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="opacity-80 max-w-none rounded-xl bg-brown-150 shadow-xl dark:shadow-inner shadow-stone-400 ring-1 ring-gray-400/10"
            src="./test.jpeg"
            width={250}
            alt=""
          />        
        </div>
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-fc-50 dark:text-fc-100 lg:max-w-lg">
              <p>
                My foundation lies in web development, and I'm actively expanding my 
                skillset to build intelligent and user-friendly web applications. 
                I aspire toward a career merging these powerful technologies to 
                contribute to the future of software engineering.
              </p>
              <p>
                I'm seeking internship opportunities that offer a 
                chance to learn and face new challenges, helping me grow as a 
                software engineer. Feel free to explore my projects and connect with me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
