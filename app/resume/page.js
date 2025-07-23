import Link from "next/link";
import DownloadIcon from '@mui/icons-material/Download';

export const metadata = {
    title: "Abdul Ghaffar - Resume",
    icons: "/favicon.png",
};

export default function Resume() {
    return (
        <div>
            {/* Download button  */}
            {/* <Link download href='/files/Abdul Ghaffar - Resume.pdf' target="_blank" className="bg-purple-500 hover:bg-purple-700 p-2 rounded-md absolute bottom-3 left-1/2 transform -translate-x-1/2 font-bold text-white">
                Download <DownloadIcon sx={{ color: "white" }} />
            </Link> */}

            <div>
                <iframe src="/files/Abdul Ghaffar - Resume.pdf" className="w-screen h-screen"
                    title="Resume" />
            </div>
        </div>
    )
}