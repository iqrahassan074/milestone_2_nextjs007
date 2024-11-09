
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
