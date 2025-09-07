import Navbar from '../navbar/Navbar'
import Image from 'next/image'
import SkillPopups from './SkillPopups'

import dynamic from "next/dynamic";

const Bg = dynamic(() => import("./Bg"), { ssr: false });

export default function Home() {
    return (
        <div
            id="home"
            className="w-screen relative overflow-hidden bg-gray-900 text-gray-200"
            style={{ height: "100vh" }}
        >
            <Bg />

            <div className="absolute top-0 w-full h-full">
                <Navbar />

                <div className="content relative w-full h-full flex items-center justify-center overflow-hidden">
                    {/* Client-only interactive part */}
                    <SkillPopups />
                    {/* Profile Image */}
                    <Image
                        src="/profile.png"
                        width={3600}
                        height={3600}
                        quality={100}
                        alt="Profile"
                        className="h-4/5 w-auto absolute bottom-0 z-[10]"
                    />
                </div>
            </div>
        </div>
    )
}
