import Link from "next/link";
import Logo from "./Logo";
import NavbarClient from "./NavbarClient";

const links = [
  { name: "Home", link: "/#", ariaLabel: "Home" },
  { name: "About", link: "/#about", ariaLabel: "About Me" },
  { name: "Projects", link: "/#projects", ariaLabel: "Projects" },
  { name: "Blogs", link: "https://blogs.iabdulghaffar.com", ariaLabel: "Blogs" },
  { name: "Github", link: "/#github", ariaLabel: "GitHub Repositories" },
  { name: "Skills", link: "/#skills", ariaLabel: "Skills" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/70 via-gray-900/70 to-gray-950/70 backdrop-blur-md border-b border-gray-800 shadow-lg" />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-[70px]">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>

        <NavbarClient links={links} />
      </div>
    </nav>
  );
}
