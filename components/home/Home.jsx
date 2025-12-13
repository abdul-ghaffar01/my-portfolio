"use client"
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import SkillPopups from "./SkillPopups";
import dynamic from "next/dynamic";

const Bg = dynamic(() => import("./Bg"), { ssr: false });

export default function Home() {
    return (
        <div
            id="home"
            className="
                relative w-screen overflow-hidden bg-gray-950 text-gray-200
                aspect-[1/1.2] sm:aspect-auto sm:h-screen
            "
        >
            <Bg />

            <div className="absolute inset-0">
                <Navbar />

                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {/* Interactive Skills */}
                    <SkillPopups />

                    {/* Profile Image */}
                    <Image
                        src="/profile.png"
                        width={1600}
                        height={1600}
                        quality={100}
                        alt="Profile"
                        loading="eager"
                        className="h-4/5 w-auto absolute bottom-0 z-[10]"
                    />
                </div>
            </div>
        </div>
    );
}
