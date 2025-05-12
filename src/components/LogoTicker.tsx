'use client'

import AK47_1 from "@/assets/AK47_1.png";
import Avatar_1 from "@/assets/Avatar_1.png";
import Desert_1 from "@/assets/Desert_1.png";
import Desert_3 from "@/assets/Desert_3.png";
import Pistola_2 from "@/assets/Pistola_2.png";
import Pistola_green from "@/assets/Pistola_green.png";

import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-12 md:py-12 ">
      <div className="flex items-center justify-center h-32 md:h-40 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-14 flex-none pr-14"
          animate={{
            translateX: "-40%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <img src={Avatar_1} alt="Logo" className="h-32 md:h-40" />
          <img src={Desert_1} alt="Logo" className="h-32 md:h-40" />
          <img src={Desert_3} alt="Logo" className="h-32 md:h-40" />
          <img src={Pistola_2} alt="Logo" className="h-32 md:h-40" />
          <img src={Pistola_green} alt="Logo" className="h-32 md:h-40" />
          <img src={AK47_1} alt="Logo" className="h-32 md:h-40" />
          {/* repeat */}
          <img src={Avatar_1} alt="Logo" className="h-32 md:h-40" />
          <img src={Desert_1} alt="Logo" className="h-32 md:h-40" />
          <img src={Desert_3} alt="Logo" className="h-32 md:h-40" />
          <img src={Pistola_2} alt="Logo" className="h-32 md:h-40" />
          <img src={Pistola_green} alt="Logo" className="h-32 md:h-40" />
          <img src={AK47_1} alt="Logo" className="h-32 md:h-40" />
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
