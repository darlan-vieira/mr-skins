'use client'

import AK47_1 from "../../public/assets/AK47_1.png";
import AK47_2 from "../../public/assets/AK47_2.png";
import Avatar_1 from "../../public/assets/Avatar_1.png";
import Avatar_2 from "../../public/assets/Avatar_2.png";
import Desert_1 from "../../public/assets/Desert_1.png";
import Desert_2 from "../../public/assets/Desert_2.png";
import Desert_3 from "../../public/assets/Desert_3.png";
import luva from "../../public/assets/luva.png";
import Pistola_2 from "../../public/assets/Pistola_2.png";
import Pistola_green from "../../public/assets/Pistola_green.png";

import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 ">
      <div className="flex items-center justify-center h-32 md:h-32 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-14 flex-none pr-14"
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
          <img src={AK47_1} alt="Logo" className="h-32" />
          <img src={AK47_2} alt="Logo" className="h-32" />
          <img src={Avatar_1} alt="Logo" className="h-32" />
          <img src={Avatar_2} alt="Logo" className="h-32" />
          <img src={Desert_1} alt="Logo" className="h-32" />
          <img src={Desert_2} alt="Logo" className="h-32" />
          <img src={Desert_3} alt="Logo" className="h-32" />
          <img src={luva} alt="Logo" className="h-32" />
          <img src={Pistola_2} alt="Logo" className="h-32" />
          <img src={Pistola_green} alt="Logo" className="h-32" />

        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
