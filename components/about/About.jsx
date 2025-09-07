import Heading from '../Heading';
import AboutImage from './AboutImage';

export default function AboutContent() {
  return (
    <div
      id="about"
      className="z-[2] bg-gray-900 h-fit py-16 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full -translate-x-1/2"></div>

      <Heading className="" text="About Me" color="text-blue-400" lineColor="bg-blue-400" />

      <div className="content mt-10 h-fit flex flex-col lg:flex-row items-center gap-[50px] justify-between w-full max-w-[1100px] px-4 overflow-hidden">
        {/* Text */}
        <div className="text flex-1 p-6">
          <div className="border-l-4 border-blue-500 pl-5">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Who am I?</h3>
            <p className="text-gray-300 text-[17px] leading-relaxed">
              I'm <span className="font-semibold text-white">Abdul Ghaffar</span>,
              a backend-focused full-stack developer with a strong foundation in algorithms,
              scalable systems, and cloud computing. I’m pursuing a Bachelor's in Computer Science
              at SZABIST with a CGPA of 3.8 and two scholarships.
            </p>
            <p className="text-gray-400 mt-4">
              I specialize in TypeScript, Next.js, and NestJS, and I'm currently learning
              <span className="text-blue-400"> Golang </span> for cloud-based systems.
              My projects include a portfolio, real-time investment platform, e-commerce store,
              and a custom DBMS (Aughr) built in C++.
            </p>
          </div>
        </div>

        {/* Client-side interactive image */}
        <AboutImage />
      </div>
    </div>
  );
}
