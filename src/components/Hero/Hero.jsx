import { motion } from "framer-motion";
import "./Hero.scss";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const sliderVariants = {
  initial: { x: 100 },
  animate: {
    x: "-420%",
    opacity: 1,
    transition: { repeat: Infinity, repeatType: "mirror", duration: 30 },
  },
};

function Hero() {
  const handleScrollDown = () => {
    const target = document.querySelector('section#Skills');

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          className="textContainer"
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Umidjon Jumaqulov</motion.h2>
          <motion.h1 variants={textVariants}>
            Web & Android Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Projects">
              <motion.button variants={textVariants}>
                See the latest works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.button
            type="button"
            className="scrollButton"
            variants={textVariants}
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: [10, 0, 10] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            onClick={handleScrollDown}
            aria-label="Scroll to the next section"
          >
            <img src="/scroll.png" alt="Scroll down" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend-developer, Android Jetpack Compose
      </motion.div>

      {/* NEW: Custom Animated SVG Illustration */}
      <div className="illustrationContainer">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient Glow behind the devices */}
          <circle cx="300" cy="300" r="150" fill="#ffb03a" opacity="0.05" filter="blur(40px)" />
          
          {/* --- WEB BROWSER WINDOW --- */}
          <motion.g
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Browser Body */}
            <rect x="50" y="120" width="360" height="240" rx="12" fill="#13132B" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2" />
            {/* Top Bar */}
            <rect x="50" y="120" width="360" height="30" rx="12" fill="#1A1A3A" />
            {/* Window Controls */}
            <circle cx="70" cy="135" r="4" fill="#FF5F56" />
            <circle cx="85" cy="135" r="4" fill="#FFBD2E" />
            <circle cx="100" cy="135" r="4" fill="#27C93F" />
            
            {/* Code Lines inside Browser */}
            <rect x="80" y="170" width="200" height="8" rx="4" fill="#FFB03A" opacity="0.8" />
            <rect x="80" y="195" width="280" height="8" rx="4" fill="#ffffff" opacity="0.3" />
            <rect x="80" y="220" width="150" height="8" rx="4" fill="#ffffff" opacity="0.3" />
            <rect x="80" y="245" width="240" height="8" rx="4" fill="#ffffff" opacity="0.3" />
            <rect x="80" y="280" width="100" height="30" rx="6" fill="#FFB03A" opacity="0.2" stroke="#FFB03A" strokeWidth="1" />
          </motion.g>

          {/* --- ANDROID PHONE (Jetpack Compose UI) --- */}
          <motion.g
            initial={{ y: 0 }}
            animate={{ y: [10, -15, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            {/* Phone Body */}
            <rect x="320" y="180" width="180" height="340" rx="28" fill="#0C0C1D" stroke="#3DDC84" strokeOpacity="0.8" strokeWidth="4" />
            {/* Phone Speaker/Notch */}
            <rect x="385" y="195" width="50" height="6" rx="3" fill="#ffffff" opacity="0.2" />
            
            {/* Compose UI Cards (Representing Declarative UI / LazyColumn) */}
            <rect x="340" y="230" width="140" height="50" rx="10" fill="#3DDC84" opacity="0.15" />
            <rect x="355" y="245" width="80" height="6" rx="3" fill="#3DDC84" opacity="0.6" />
            
            <rect x="340" y="295" width="140" height="50" rx="10" fill="#3DDC84" opacity="0.15" />
            <rect x="355" y="310" width="100" height="6" rx="3" fill="#3DDC84" opacity="0.6" />
            
            <rect x="340" y="360" width="140" height="50" rx="10" fill="#3DDC84" opacity="0.15" />
            <rect x="355" y="375" width="60" height="6" rx="3" fill="#3DDC84" opacity="0.6" />

            {/* Floating Compose Icon Element (Abstract representation) */}
            <circle cx="410" cy="460" r="20" fill="#3DDC84" opacity="0.2" />
            <path d="M400 460 L410 470 L425 450" stroke="#3DDC84" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </motion.g>

          {/* --- FLOATING DECORATIONS (< /> Brackets) --- */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "300px 300px" }}
          >
            <text x="120" y="420" fill="#ffffff" opacity="0.2" fontSize="40" fontWeight="bold" fontFamily="monospace">{"</>"}</text>
            <text x="450" y="100" fill="#3DDC84" opacity="0.2" fontSize="40" fontWeight="bold" fontFamily="monospace">{"{}"}</text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

export default Hero;