import { animate, motion } from "framer-motion"

const bgVariants = {
    // initial: {},
    // animate: {},
    // exit: {},
    // hover: {},
    // inView: {},
    initial: { rotate: 0 },
    animate: {
        rotate: 360,
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
        },
    },
    exit: {
        rotate: 0
    }

}

const Bg = () => {

    return (
        <motion.div variants={bgVariants}
            style={{
                transformOrigin: 'center',  // Ensures rotation happens around the center without affecting the layout
                willChange: 'transform' // Optimizes performance
            }}
            exit="exit" initial="initial" animate="animate" className='relative w-full h-full bg-transparent  blur-[100px] overflow-hidden z-[0] flex items-center justify-center ' >
            {/* Center circle */}
            <div className="rounded-full w-[25%] h-[50%] bg-gradient-to-br from-color-900 to-color-500 z-[-1]"></div>

            {/* Lines */}
            <div className="absolute w-full h-full flex flex-col items-center justify-center">
                <div className="absolute w-full h-[55px] bg-gradient-to-r from-color-900 via-color-700 to-color-500"></div>
                <div className="absolute w-full rotate-45 h-[55px] bg-gradient-to-r from-color-900 via-color-700 to-color-900"></div>
                <div className="absolute w-full rotate-90 h-[55px] bg-gradient-to-r from-color-900 via-color-700 to-color-900"></div>
                <div className="absolute w-full rotate-[135deg] h-[55px] bg-gradient-to-r from-color-900 via-color-700 to-color-900"></div>
            </div>
        </motion.div>
    )
}

export default Bg