"use client"
import {motion} from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Video } from "lucide-react";

export default function Hero () {
  const [index, setIndex] = useState(0);
      return(

        <section className="relative w-full h-[100vh] lg:h:screen overflow-hidden">
          {/*Video*/}
         <video
         className="absolute inset-0 w-full h-full object-cover brightness-130"
         src="/Web/shining 3d.mp4"
         autoPlay
         loop
         muted
         playsInline/>
          ))
          {/*Degradado azul*/}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-800 via-blue-800/30 to-transparent"/>
          {/*Contenido*/}
         <div className="relative z-10 h-full flex flex-col justify-between pl-[5%] pr-[2%] lg:pl-[10%] lg:pr-[5%] py-[5%]">
            {/* 🔹 LOGOS (arriba derecha, misma intención visual) */}
            <div className="flex justify-end gap-[3%]">
              <motion.img
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                src="/Logos/BalsasTrans.png"
                alt="Balsas"
                className="md:h-[clamp(2rem,7vw,5rem)] h-[clamp(3rem,7vw,5rem)] w-auto -translate-y-[30%]"
              />

              <motion.img
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                src="/Logos/Shining3d.png"
                alt="Shining"
                className="h-[clamp(1.5rem,4vw,3rem)] w-auto"
              />
            </div>

            {/* 🔹 TEXTO PRINCIPAL */}
            <div className="flex justify-end">
              <div className="text-white w-full max-w-[40rem] text-right">

                <motion.h1
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-tight"
                >
                  El futuro del escaneo intraoral
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-[clamp(0.9rem,1.5vw,1.25rem)] mt-[3%]"
                >
                  Lleve tu clínica al siguiente nivel con tecnología digital.
                  <br />
                  Haz más eficiente tu trabajo combinando la salud con la tecnología que ofrece Shining 3D.
                </motion.p>

              </div>
            </div>
            {/* 🔹 DISCLAIMER (abajo centrado) */}
            <div className="w-full flex justify-center">
              <motion.p
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-white text-[clamp(0.6rem,0.8vw,0.8rem)] mt-[-13%] md:mt-[-3%] text-center max-w-[90%] md:max-w-[95%] leading-relaxed font-semibold"
              >
                Algunos contenidos audiovisuales mostrados en este sitio pertenecen a <strong>Shining 3D</strong> y 
                se utilizan con fines informativos y comerciales.
              </motion.p>
            </div>
          </div>
        </section>
      )
} 