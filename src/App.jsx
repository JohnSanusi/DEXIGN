import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hire from "./components/Hire"
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  });
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Hire/>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
