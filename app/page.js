"use client"
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Home from "@/components/home/Home";
import Loader from "@/components/Loader";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useRef, useState } from "react";

export default function page() {
  const [loader, setLoader] = useState(false)
  const dummy = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      dummy.current.style.height = 0;
    }, 800);
  })
  return (
    <div className="w-screen">
      {loader ? <Loader /> :
        (<>
          <Navbar />
          <Home />
          {/* protecting the animation trigger without comming in view of below elements */}
          <div ref={dummy} className="w-screen h-screen" ></div>
          <About />

          <Contact />
          <Footer />
        </>)
      }
    </div>
  );
}
