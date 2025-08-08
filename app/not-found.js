import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "404 – Page Not Found | Abdul Ghaffar",
    description:
        "Sorry, the page you were looking for doesn't exist. Return home to explore Abdul Ghaffar's portfolio and projects.",
};

export default function NotFound() {
    return (
        <div className="w-screen h-[100dvh] bg-black flex flex-col items-center justify-center px-4 text-center">
            {/* Large 404 Text */}
            {/* <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white mb-4">
        404
      </h1> */}

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-lg">
                Oops! The page you&apos;re looking for doesn&apos;t exist.
            </p>

            {/* Illustration / GIF */}
            <div className="mb-8 w-full max-w-[900px]">
                <Image
                    src="/error_404.gif" // Place the GIF in /public
                    width={500}
                    height={500}
                    alt="Animated glitching 404 error"
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            {/* Return Home Button */}
            <Link
                href="/"
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-gray-700 rounded-lg shadow-md group"
            >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-200 duration-300 -translate-x-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 group-hover:translate-x-0 ease">
                    Home →
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    Return Home
                </span>
                <span className="relative invisible">Return Home</span>
            </Link>
        </div>
    );
}
