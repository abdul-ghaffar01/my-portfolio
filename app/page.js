"use client"
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import GitHubRepos from "@/components/github/Github";
import Home from "@/components/home/Home";
import Loader from "@/components/Loader";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import { useEffect, useRef, useState } from "react";

export default function page() {
  const [loading, setLoading] = useState(true)
  const dummy = useRef(null);

  useEffect(() => {
    fetch('/api/track')
      .then(res => res.json())
      .then(data => console.log('Total Visits:', data.count));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (dummy.current)
        dummy.current.style.height = 0;
    }, 2800);
  })
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-screen overflow-hidden">
      {loading ? <Loader /> :
        (<>
          {/* <Navbar /> */}
          <Home />
          {/* protecting the animation trigger without comming in view of below elements */}
          <div ref={dummy} className="w-screen h-screen" ></div>
          <About />
          <Projects />
          <GitHubRepos />
          <Skills />
          <Contact />
          <Footer />
        </>)
      }
    </div>
  );
}
