import { motion } from "framer-motion"
import Heading from "../Heading"
import Link from "next/link"

const Contact = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
            viewport={{ once: true, amount: 0.5 }}
            className=" max-w-[800px] min-h-[50vh] p-2 mx-auto my-[70px] flex flex-col items-center justify-evenly"
        >

            <div className="w-full relative flex items-center justify-center">
                <motion.div
                    className="absolute z-[-1] bg-color-300 w-full h-[2px]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%", transition: { delay: 0.8, duration: .3 } }}
                    viewport={{ once: true, amount: 1 }}
                ></motion.div>
                <Heading text="Get in touch" lineColor="bg-color-500" color="text-color-500" className="bg-color-50 px-2" />
                {/* <hr /> */}
            </div>

            <div className="mt-5 text-center w-full">
                <p className="text-color-gray-500">
                    Let’s connect! I'm always open to new opportunities and would love to discuss how I can bring value to your team or project. Feel free to reach out!
                </p>
            </div>

            <Link href="mailto:agscontact777@gmail.com" className="mt-5 group p-1 px-4 text-color-700 border border-color-700 rounded-md font-bold relative overflow-hidden">
                <span className='group-hover:text-color-light'>
                    Say hello
                </span>
                <span className="absolute left-0 bottom-0 h-full bg-color-500 w-0 group-hover:w-full transition-all duration-600 z-[-1]"></span>
            </Link>

        </motion.div>
    )
}

export default Contact