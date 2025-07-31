import { motion } from "framer-motion";
import Followers from "./Followers";
import ProfileSection from "./ProfileSection";
import Heading from "../Heading";

const Github = () => {
  return (
    <section
      id="github"
      className="relative w-full py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Blurred Blobs */}
        <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px]" />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        viewport={{ once: true }}
        className="relative z-10 w-full flex flex-col items-center justify-center"
      >
        <Heading text="GitHub Profile" color="text-blue-400" lineColor="bg-blue-500" />
        <p className="mt-4 text-center text-gray-400 max-w-lg mx-auto">
          Explore my open-source contributions, followers, and repositories that reflect my growth and skills.
        </p>
      </motion.div>

      {/* Profile + Followers Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center mt-10 gap-10 px-4 md:px-8"
      >
        {/* Profile Section */}
        <div className="w-full max-w-5xl">
          <ProfileSection />
        </div>

        {/* Followers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Followers />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Github;
