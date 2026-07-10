"use client";

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { navItems, socialLinks } from "@/lib/data";
import "./MobileMenu.scss";

const overlayVariants: Variants = {
  open: {
    opacity: 1,
    transition: { duration: 0.25, staggerChildren: 0.07, delayChildren: 0.05 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.2, staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  open: { y: 0, opacity: 1 },
  closed: { y: 24, opacity: 0 },
};

interface MobileMenuProps {
  onClose: () => void;
}

function MobileMenu({ onClose }: MobileMenuProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.nav
      className="mobileMenu"
      initial="closed"
      animate="open"
      exit="closed"
      variants={overlayVariants}
      aria-label="Menu"
    >
      <button
        type="button"
        className="closeButton"
        onClick={onClose}
        aria-label="Close menu"
        autoFocus
      >
        ✕
      </button>

      <motion.div className="menuLinks" variants={overlayVariants}>
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item}`}
            onClick={onClose}
            variants={itemVariants}
            whileTap={{ scale: 0.96 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>

      <motion.div className="menuSocials" variants={itemVariants}>
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon />
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
}

export default MobileMenu;
