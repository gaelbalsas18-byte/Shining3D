"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Hero() {
  return (
  <section
  className="relative w-full h-[70vh] mh:h[80vh] lg:h-screen">
    <img
        src="#"
        alt="Escáner intraoral"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/*Overlay*/}
      <div className="absolute inset-0 bg-blue-800">
        <div className="absolute top-5.5 left-72 md:top-10 md:left-260 z-20">
             <motion.img
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/Logos/Shining3d.png"
          alt="Shining"
          className="h-6 md:h-12   lg:h-8  w-auto"
        />
        </div>
        <div className="absolute top-1 left-54 md:top-2 md:left-235 z-20">
             <motion.img
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/Logos/BalsasTrans.png"
          alt="Balsas"
          className="h-12 md:h-12   lg:h-18  w-auto"
        />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center md:justify-end px-6 md:px-12 lg:px-20">
            <div className="text-white max-w-xl text-center md:text-right">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-3x1 sm:text-4x1 md:text-5x1 lg:text-4xl font-semibold md-4"
                >
                    El futuro del escaneo intraoral
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl mt-5"
                >
                    Lleve tu clinica al siguiente nivel con tecnologia digital.
                    <br/> Haz mas eficiente tu trabajo combinando la salud con la tecnologia que ofrece shining 3D.
                </motion.p>
            </div>
        </div>
      </div>
  </section>
  );
}

