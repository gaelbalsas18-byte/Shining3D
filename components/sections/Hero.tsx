"use client"
import {motion} from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const imagenes =[
  "/Experiencias/exp1.jpeg",
  "/Experiencias/exp2.jpeg",
  "/Experiencias/exp1.jpeg",
]

export default function Hero () {
  const [index, setIndex] = useState(0);

  useEffect (() => {
    const intervalo = setInterval(() =>{
      setIndex ((prev) =>(prev+1) % imagenes.length);
    }, 4000);
    return () => clearInterval (intervalo);
  },[]);

      return(
        <section className="relative w-full h-[100vh] lg:h:screen overflow-hidden">
          {/*Carrusel de las imagenes que pase luisa*/}
          {imagenes.map((img,i) => (
            <motion.img
            key={i}
            src={img}
            alt="Experiencias"
            initial={{ opacity: 0}}
            animate={{ opacity: i === index ? 1 : 0}}
            transition={{ duration: 1}}
            className="absolute inset-0 w-full h-full object-cover"
            />
          ))}

          {/*Degradado azul*/}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-700 via-blue-600/80 to-transparent"/>
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