'use client'

import skin_01B from "../../public/assets/skin_01B.png";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 ">
      <div className="flex items-center justify-center h-20 md:h-32 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex space-x-4 animate-marquee whitespace-nowrap"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
          {/* Segunda sessão de logos */}
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
          <img
            src={skin_01B}
            alt="Logo"
            className="h-32 md:h-48 justify-start"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
