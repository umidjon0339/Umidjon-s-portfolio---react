import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle state properly
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <img className="logo" src="/logo.jpg" alt="logo" />
        <div className="tabs">
          <a href="#Home">Home</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="burger-icon" onClick={handleSidebarToggle}>
          <motion.div whileTap={{ scale: 0.9 }}>
            <GiHamburgerMenu />
          </motion.div>
        </div>
        <div className="social">
          <a
            href="https://t.me/umidjon0339"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <SiTelegram className="socialIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ujcodes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="socialIcon" />
          </a>
          <a
            href="https://github.com/umidjon0339"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="socialIcon" />
          </a>
        </div>
      </div>
      {/* Render the sidebar conditionally */}
      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
      )}
    </div>
  );
}

export default Navbar;
