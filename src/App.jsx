import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Tools from "./components/Tools";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-rose-50 via-white to-lavender-50 text-gray-800 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Tools />
      <Testimonials />
      <Contact />
    </div>
  );
}
