"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { socialLinks } from "@/lib/data";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import "./Navbar.scss";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <a href="#Home" className="brand" aria-label="Back to top">
          <Image
            className="logo"
            src="/logo.jpg"
            alt="Umidjon's Portfolio"
            width={220}
            height={100}
            priority
          />
          <Image
            className="logoCompact"
            src="/u-only.svg"
            alt="Umidjon's Portfolio"
            width={40}
            height={40}
            unoptimized
            priority
          />
        </a>
        <div className="tabs">
          <a href="#Home">Home</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="social">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="socialIcon" />
            </a>
          ))}
        </div>
        <button
          type="button"
          className="burger"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
