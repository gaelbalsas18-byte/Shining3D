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
      setSize({ width: 390, height: 480 });  

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
    }, 8500);
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
              className="bg-white text-black p-6 md:p-10 flex flex-col items-center"
            >

              {/* TITULO */}
              <h2 className="text-xl md:text-4xl font-bold text-center">
                EXPERIENCIA
              </h2>

              <div className="relative flex flex-col items-center mt-2">
                <h3 className="text-xs uppercase tracking-widest text-black font-semibold
                translate-x-1 md:translate-x-45 mt-2 md:mt-7">
                  Balsas x Shining 3D
                </h3>
                <img
                  src="/Logos/Shining.png"
                  alt="logo"
                  className="h-[40px] md:h-[50px] mt-2 md:mt-7 
                  translate-x-1 md:translate-x-45"
                />
              </div>

              {/* CONTENIDO */}
              <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-center gap-8">

                {/* IMAGEN */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="relative h-[140px] w-[160px] md:h-[420px] md:w-[280px] 
                  overflow-hidden rounded-3xl shadow-xl group 
                  -mt-6 md:-mt-25 translate-y-[-10px] md:translate-y-[-20px]"
                >
                  <Image
                    src="/Personal/Giancarlo.jpg"
                    alt="Uso profesional"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </motion.div>

                {/* TARJETA */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-[300px] md:max-w-[420px] bg-white rounded-3xl p-6 md:p-8 shadow-2xl -mt-10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-600 p-4 text-white text-xl rounded-2xl">
                      👁
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-blue-600">
                        Pregunta 1
                      </span>
                      <h4 className="font-semibold text-black text-[10px] md:text-xl">
                        ¿Qué tan difícil es trabajar con un escáner de Shining 3D?
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white text-black p-6 md:p-10 flex flex-col items-center">

              {/* TITULO */}
              <h2 className="text-xl md:text-4xl font-bold text-center">
                EXPERIENCIA
              </h2>

              <div className="relative flex flex-col items-center mt-2">
                <h3 className="text-xs uppercase tracking-widest text-black font-semibold
                translate-x-1 md:translate-x-45 mt-2 md:mt-7">
                  Balsas x Shining 3D
                </h3>

                <img
                  src="/Logos/Shining.png"
                  alt="logo"
                  className="h-[40px] md:h-[50px] mt-2 md:mt-7 
                  translate-x-1 md:translate-x-45"
                />
              </div>

              {/* CONTENIDO */}
              <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-center gap-8">

                {/* IMAGEN */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="relative h-[140px] w-[160px] md:h-[420px] md:w-[280px] 
                  overflow-hidden rounded-3xl shadow-xl group 
                  -mt-6 md:-mt-25 translate-y-[-10px] md:translate-y-[-20px]"
                >
                  <Image
                    src="/Personal/Giancarlo.jpg"
                    alt="Uso profesional"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </motion.div>

                {/* TARJETA */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-[260px] md:max-w-[420px] bg-white rounded-3xl p-1 md:p-8 shadow-2xl -mt-9"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-600 p-4 text-white text-xl rounded-2xl">
                      ✏
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-blue-600">
                        Dr. Giancarlo
                      </span>
                       <h4 className="text-[9px] md:text-xl font-semibold mt-1">
                          Especialmente fáciles de manejar
                        </h4>
                        <p className="text-[8px] text-black leading-relaxed mt-3">
                        Cada producto viene acompañado de lo necesario
                        para trabajar, limpiar o cambiar sus repuestos
                        sin buscar herramientas adicionales.
                        </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>


             <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white text-black p-6 md:p-10 flex flex-col items-center"
            >

              {/* TITULO */}
              <h2 className="text-xl md:text-4xl font-bold text-center">
                EXPERIENCIA
              </h2>

              <div className="relative flex flex-col items-center mt-2">
                <h3 className="text-xs uppercase tracking-widest text-black font-semibold
                translate-x-1 md:translate-x-45 mt-2 md:mt-7">
                  Balsas x Shining 3D
                </h3>

                <img
                  src="/Logos/Shining.png"
                  alt="logo"
                  className="h-[40px] md:h-[50px] mt-2 md:mt-7 
                  translate-x-1 md:translate-x-45"
                />
              </div>

              {/* CONTENIDO */}
              <div className="w-full mt-10 flex flex-col md:flex-row items-center justify-center gap-8">

                {/* IMAGEN */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="relative h-[140px] w-[160px] md:h-[420px] md:w-[280px] 
                  overflow-hidden rounded-3xl shadow-xl group 
                  -mt-6 md:-mt-25 translate-y-[-10px] md:translate-y-[-20px]"
                >
                  <Image
                    src="/Personal/Giancarlo.jpg"
                    alt="Uso profesional"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </motion.div>

                {/* TARJETA */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-[260px] md:max-w-[420px] bg-white rounded-3xl p-2 md:p-8 shadow-2xl -mt-9"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-600 p-4 text-white text-xl rounded-2xl">
                      🔧
                    </div>
                    <div>
                      <span className="text-[8px] uppercase tracking-widest text-blue-600">
                         Todo incluido
                      </span>
                       <h4 className="text-[9px] md:text-xl font-semibold mt-1">
                          Incluyen sus propias herramientas
                        </h4>
                        <p className="text-[8px] text-black leading-relaxed mt-3">
                        Cada producto viene acompañado de lo necesario
                        para trabajar, limpiar o cambiar sus repuestos
                        sin buscar herramientas adicionales.
                        </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

      </HTMLFlipBook>

    </section>
  );
}
