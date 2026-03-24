"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";

const HTMLFlipBook: any = dynamic(() => import("react-pageflip"), {
  ssr: false,
});

export default function Emocional() {
  const [size, setSize] = useState({ width: 400, height: 500 });
  const bookRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSize({ width: 400, height: 500 });
        
      } else if (window.innerWidth < 1024) {
        
        setSize({ width: 500, height: 600 });
      } else {
        setSize({ width: 1240, height: 600 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
  let interval: any;
  let timer: any;

  timer = setTimeout(() => {
    interval = setInterval(() => {
      if (bookRef.current) {
        const flip = bookRef.current.pageFlip();

        if (flip) {
          const current = flip.getCurrentPageIndex();
          const total = flip.getPageCount();

          if (current === total - 1) {
            flip.flip(0);
          } else {
            flip.flipNext();
          }
        }
      }
    }, 6530);
  }, 4000);

  return () => {
    clearTimeout(timer);
    clearInterval(interval);
  };
}, []);

useEffect(() => {
  return () => {
    if (bookRef.current) {
      bookRef.current = null;
    }
  };
}, []);

  return (

    <section id="Emocional" className="bg-blue-700 py-15 flex justify-center items-center">
      <HTMLFlipBook
        key={`${size.width}-${size.height}`}
        ref={bookRef}
        width={size.width}
        height={size.height}
        className="shadow-2xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white flex items-center md:text-center text-center justify-center text-black font-bold text-xl md:text-4xl p-6"
        >
          EXPERIENCIA 
          <h3
            className="text-xs uppercase tracking-widest text-neutral-500 mb-3 text-center mt-3">
              Balsas x Shining 3D
            </h3>
          <div className="absolute md:left-190 md:top-40 left-20 top-100">
              <motion.img
              initial={{}}
              transition={{duration: 0.8}}
            src="/Logos/Shining.png"
            alt="logo"
            className="w-[auto] h-[50px]">
             </motion.img>
          </div>
          <div className="relative w-full grid md:grid-cols-2 mt-20">
                  {/* Imagen */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.04 }}
                    className="relative h-[250px] w-[160px] md:h-[420px] md:w-[280px] top-[-75] md:top-[-55] max-w-sm overflow-hidden rounded-3xl shadow-xl group left-25 md:left-55"
                  >
                    <Image
                      src="/Personal/Giancarlo.jpg"
                      alt="Uso profesional"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  </motion.div>

                  <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute
                  md:left-150
                  right-[-13]
                  w-[380px]
                  rounded-3xl
                  top-[190px]
                  md:top-23
                  bg-white
                  md:w-[420px]
                  md:p-10
                  p-6
                  shadow-2xl">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-600 p-4 text-white text-xl">
                        👁
                      </div>
                      <div>
                        <span className="md:text-xs text-xs uppercase tracking-widest text-blue-600">
                          Pregunta 1
                        </span>
                        <h4 className="font-semibold font-mono text-black mt-1 text-xs md:text-xl">
                          ¿Que tan dificil es trabajar con un escaner de Shining 3D? 
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-black leanding-relaxed">
                    </p> 
                  </motion.div>
                </div>        
        </motion.div>
        <div className="bg-white flex items-center md:text-center text-center justify-center text-black font-bold text-xl md:text-4xl p-6">
          EXPERIENCIA
          <h3
            className="text-xs uppercase tracking-widest text-neutral-500 mb-3 text-center mt-3">
              Balsas x Shining 3D
            </h3>
          <div className="absolute md:left-65 md:top-40 left-20 top-100">
              <img
            src="/Logos/Shining.png"
            alt="logo"
            className="w-[auto] h-[50px]">
             </img>
        </div>
          <div className="relative w-full grid md:grid-cols-2 mt-20">
                  {/* Imagen */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.04 }}
                    className="relative h-[250px] w-[160px] md:h-[420px] md:w-[280px] top-[-80] md:top-[-50] max-w-sm overflow-hidden rounded-3xl shadow-xl group left-25 md:left-170"
                  >
                    <Image
                      src="/Personal/Giancarlo.jpg"
                      alt="Uso profesional"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 "
                    />
          
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute
                  md:left-[120]
                  md:w-[150px]
                  md:rounded-3xl
                  md:top-80
                  md:bg-blue-700
                  md:w-[380px]
                  md:h-[2px]
                  md:p-5
                  md:shadow-2xl">
                  </motion.div>
                  {/* Tarjeta Azul*/}
                  
                 <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                  className="
                    absolute
                    md:left-[5%]
                    right-[-13]
                    top-[175]
                    md:top-25
                    rounded-3xl
                    bg-white
                    text-black
                    w-[320px]
                    md:w-[480px]
                    w-[380px]
                    md:h-[200px]
                    md:p-2
                    shadow-2xl
                  "
                >
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-600 p-4 text-xl text-white">
              ✏
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-600">
                Dr. Giancarlo
              </span>
              <h4 className="text-sm md:text-xl font-semibold mt-1">
                Especialmente fáciles de manejar
              </h4>
              <p className="text-xs text-black leading-relaxed mt-3">
              Cada producto viene acompañado de lo necesario
              para trabajar, limpiar o cambiar sus repuestos
              sin buscar herramientas adicionales.
              </p>
            </div>
          </div>
        </motion.div>

                </div> 
        </div>

        <div className="bg-white flex items-center md:text-center text-center justify-center text-black font-bold text-xl md:text-4xl p-6">
          EXPERIENCIA
          <h3
            className="text-xs uppercase tracking-widest text-neutral-500 mb-3 text-center mt-3">
              Balsas x Shining 3D
            </h3>
          <div className="absolute md:left-65 md:top-40 left-20 top-100">
              <img
                 src="/Logos/Shining.png"
                 alt="logo"
                 className="
                 w-[auto] 
                 h-[50px]">
             </img>
          </div>

          <div className="relative w-full grid md:grid-cols-2 mt-20">
                  {/* Imagen */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.04 }}
                    className="relative h-[250px] w-[160px] md:h-[420px] md:w-[280px] top-[-80] md:top-[-50] max-w-sm overflow-hidden rounded-3xl shadow-xl group left-25 md:left-170"
                  >
                    <Image
                      src="/Personal/Giancarlo.jpg"
                      alt="Uso profesional"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 "
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute
                  md:left-[120]
                  md:w-[150px]
                  md:rounded-3xl
                  md:top-80
                  md:bg-blue-700
                  md:w-[380px]
                  md:h-[2px]
                  md:p-5
                  md:shadow-2xl">
                  </motion.div>
                  {/* Tarjeta Azul*/}
                 <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                  className="
                    absolute
                    md:left-[5%]
                    right-[-13]
                    top-[175]
                    md:top-25
                    rounded-3xl
                    bg-white
                    text-black
                    w-[320px]
                    md:w-[480px]
                    w-[380px]
                    md:h-[200px]
                    md:p-2
                    shadow-2xl
                  "
                >
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-600 p-4 text-xl text-white">
              🔧
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-600">
                todo incluido
              </span>
              <h4 className="text-sm md:text-xl font-semibold mt-1">
                Incluyen sus propias herramientas
              </h4>
              <p className="text-xs text-black leading-relaxed mt-3">
               Cada producto viene acompañado de lo necesario
               para trabajar, limpiar o cambiar sus repuestos
               sin buscar herramientas adicionales.
              </p>
            </div>
          </div>
        </motion.div>
             </div>
        </div>

      </HTMLFlipBook>

    </section>
  );
}