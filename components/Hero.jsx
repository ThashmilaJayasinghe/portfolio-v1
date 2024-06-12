const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Hero() {
  return (
    <div id="hero" className="h-[89vh] relative isolate overflow-hidden bg-brown-50 dark:bg-brown-200 py-24 sm:py-24">
      <div id="div2" className="py-16 sm:py-32 lg:py-40 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="inline text-4xl font-bold tracking-tight text-fc-50 dark:text-fc-100 sm:text-6xl">
            Welcome <img className="inline max-h-16 dark:invert" src="happy.svg"/>          
          </h1>
          <p className="mt-6 text-lg leading-8 text-fc-50 dark:text-fc-100">
            Software Engineer in the making, with a strong foundation 
            in web development and a growing interest in integrating AI
            into web applications.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
          <p className="mt-6 text-lg font-semibold leading-8 text-fc-50 dark:text-fc-100">
            Get in Touch<span className="px-2 text-brown-150" aria-hidden="true">&rarr;</span>
            <a className="font-semibold hover:" href="mailto:thashmilajayasinghe@gmail.com">
              thashmilajayasinghe@gmail.com
            </a>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
