
import About from "@/components/about/About";
import ChatBot from "@/components/chatbot/ChatBot";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import GitHub from "@/components/github/Github";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Page() {
  return (
    <div className="w-screen overflow-hidden bg-gray-900">
      <Home />
      <About />
      <Projects />
      <GitHub />
      <Skills />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

