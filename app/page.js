import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <div>
        {/* <img
          src="./noise.svg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        /> */}
        <Header />
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}