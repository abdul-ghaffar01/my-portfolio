export const metadata = {
  title: "Resume | Abdul Ghaffar",
  description:
    "View Abdul Ghaffar's professional resume, showcasing experience, skills, and projects in full-stack and cloud development.",
  openGraph: {
    title: "Resume | Abdul Ghaffar",
    description:
      "Explore Abdul Ghaffar's resume including experience, technical skills, and portfolio projects.",
    url: "https://iabdulghaffar.com/resume",
    siteName: "Abdul Ghaffar",
    locale: "en_US",
    type: "profile",
  },
};

export default function RootLayout({ children }) {
  return (<>
    {children}
  </>
  );
}
