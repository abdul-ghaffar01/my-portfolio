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

  useEffect(() => {
    fetch('/api/track')
      .then(res => res.json())
      .then(data => console.log('Total Visits:', data.count));
  }, []);

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
