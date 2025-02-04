import About from "@/components/about/About";
import FadeInFromTopInView from "@/components/FadeInFromTopInView";
import Home from "@/components/home/Home";
import Navbar from "@/components/navbar/Navbar";

export default function page() {
  return (
    <div className="w-screen">
      <FadeInFromTopInView>
        <Navbar />
        <Home />
        <About />
      </FadeInFromTopInView>
    </div>
  );
}
