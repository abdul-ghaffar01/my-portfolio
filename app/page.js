"use client"
import About from "@/components/about/About";
import ChatBot from "@/components/chatbot/ChatBot";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import GitHubRepos from "@/components/github/Github";
import Home from "@/components/home/Home";
import Loader from "@/components/Loader";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import { useEffect, useRef, useState } from "react";
import Loading from "./loading";

export default function page() {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="w-screen overflow-hidden bg-gray-900">
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
          <ChatBot />
        </>)
      }
    </div>
  );
}
