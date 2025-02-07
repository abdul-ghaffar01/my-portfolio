import { motion } from "framer-motion"
const Logo = () => {
    return (
        <div className="relative w-[60px] h-[60px] flex items-center justify-center">
  {/* lines */}
  <div className="absolute top-0 w-full h-full">
    {/* top line  */}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%", transition: { duration: 0.2, delay: 0.8 } }}
      viewport={{ once: true, amount: 1 }}
      className="absolute top-0 left-0 w-full h-[6px] bg-purple-500"
    ></motion.div>

    {/* right line  */}
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "100%", transition: { duration: 0.2, delay: 1.0 } }}
      viewport={{ once: true, amount: 1 }}
      className="absolute right-0 top-0 w-[6px] h-full bg-purple-500"
    ></motion.div>

    {/* Bottom line  */}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%", transition: { duration: 0.2, delay: 1.2 } }}
      viewport={{ once: true, amount: 1 }}
      className="absolute bottom-0 right-0 w-full h-[6px] bg-purple-500"
    ></motion.div>

    {/* left line  */}
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "100%", transition: { duration: 0.2, delay: 1.4 } }}
      viewport={{ once: true, amount: 1 }}
      className="absolute left-0 bottom-0 w-[6px] h-full bg-purple-500"
    ></motion.div>
  </div>

  {/* Text */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 0.2, delay: 1.6 } }}
    viewport={{ once: true, amount: 1 }}
    className="absolute text-2xl font-bold text-purple-500"
  >
    AG
  </motion.div>
</div>

    );
};

export default Logo;