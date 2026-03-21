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
         className="absolute inset-0 w-full h-full object-cover brightness-110"
         src="/Web/shining 3d.mp4"
         autoPlay
         loop
         muted
         playsInline/>
          ))
          {/*Degradado azul*/}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-700 via-blue-800/30 to-transparent"/>
          {/*Contenido*/}
          <div className="relative z-10 h-full flex items-center justify-end px-8 lg:px-20">
            <div className="text-white  max-w-xl text-right">
              <motion.h1
              initial={{ opacity: 0, x: 80}}
              whileInView={{ opacity: 1, x: 0}}
              transition={{ duration: 1.2}}
              className="text-4xl md:text-4xl font-semibold leading-tight">
                El futuro del escaneo intraoral
              </motion.h1>
              <motion.p
              initial={{ opacity: 0, y: 80}}
              animate={{ opacity: 1, y:  0}}
              transition={{ duration: 1}}
              className="text-sm sm:text-base md:text-lg lg:text-xl mt-5">
                Lleve tu clinica al siguiente nivel con tecnologia digital.
                <br/> Haz mas eficiente tu trabajo combinando la salud con la tecnologia que ofrece shining 3D.
              </motion.p>
            </div>
             <div className="absolute md:left-55 md:top-110 left-[1px] top-80 z-20">
                <motion.p
              initial={{ opacity: 0, y: 80}}
              animate={{ opacity: 1, y:  0}}
              transition={{ duration: 1}}
              className="text-white md:text-[9px] text-[8px] md:mt-40 mt-98 md:leading-tight leading-relaxed md:uppercase font-semibold text-center">
              Algunos contenidos audiovisuales mostrados en este sitio pertenecen a <strong>Shining 3D </strong>
              y se utilizan con fines informativos y comerciales bajo autorización.
              </motion.p>
           </div>
            <div className="absolute top-5.5 left-72 md:top-10 md:left-260 z-20">
              <motion.img
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src="/Logos/Shining3d.png"
              alt="Shining"
              className="h-6 md:h-12   lg:h-7  w-auto"
           />
           </div>
           <div className="absolute top-1 left-54 md:top-2 md:left-235 z-20">
              <motion.img
              initial={{ opacity: 0, y:80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration:   1 }}
              src="/Logos/BalsasTrans.png"
              alt="Balsas"
              className="h-12 md:h-12   lg:h-17  w-auto"
              />
           </div>
          </div>
        </section>
      )
}