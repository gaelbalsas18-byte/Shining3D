"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { generarLinkWhatsApp } from "@/utils/whatsapp";
import { personas } from "@/data/personas";

const asesores = personas.filter(p =>
  Array.isArray(p.categoria)
    ? p.categoria.includes("asesores")
    : p.categoria === "asesores"
);

const obtenerAsesorAleatorio = () => {
  if (asesores.length === 0) return null;
  const index = Math.floor(Math.random() * asesores.length);
  return asesores[index];
};

const productos = [

  {
    id: 1,
    nombre: "Aoralscan 3",
    descripcion: `• Excepcional, inteligente y elegante.
                  • Profundidad de barrido de hasta 22 mm.
                  • Precisión superior y mayor profundidad.
                  • Aoralscan 3 combina un diseño moderno con velocidad ultrarrápida, alta precisión y procesamiento avanzado con IA. 
                  • Su punta estándar ofrece un campo de visión de 16 mm × 12 mm × 22 mm, logrando capturas más rápidas y exactas.`,
    imagen: "/Productos/ClinicaS/AoralscaN1.jpg",
  },

  {
    id: 2,
    nombre: "Aoralscan Elite",
    descripcion: `• Fotogrametría intraoral.
                  • Amplia compatibilidad con más de 100 marcas de implantes.
                  • Sistema dos en uno.
                  • Alta precisión.
                  • Máxima eficiencia.
                  • El Aoralscan Elite integra un diseño compacto y ultraligero con un rendimiento excepcional.
                  • Su estructura ergonómica permite un ajuste cómodo en una sola mano, mejorando la usabilidad y la experiencia durante el escaneo.
                  • Peso: 124 g.
                  • Dimensiones: 245 × 30 × 26 mm.`,
    imagen: "/Productos/ClinicaS/aoralscan elite.jpg",
  },

  {
    id: 3,
    nombre: "Aoralscan Lync",
    descripcion: `• Escaneo más rápido.
                  • Mayor precisión.
                  • Mayor profundidad de captura.
                  • Aoralscan Lync está diseñada para adaptarse a diversos escenarios clínicos, como lo es la adquisición de cuerpos de escaneo hasta exploraciones periodontales.
                  • Permite realizar los procedimientos con mínima interacción con el ordenador, brindando una experiencia más segura, fluida y eficiente.` ,
    imagen: "/Productos/ClinicaS/aoralscan lync.jpg"
  },

  {
    id: 4,
    nombre: "Meti Smile",
    descripcion: `• Análisis integral y precisión digital avanzada.
                  • Permite registrar el movimiento mandibular.
                  • Realiza análisis estético facial, simulaciones ortodónticas y diseño digital de sonrisa.
                  • Soporta la segmentación directa de datos DICOM y la autoalineación.
                  • Integra datos multimodales en un único sistema de coordenadas.`,
    imagen: "/Productos/ClinicaS/meti small.jpg",
  },
  
];

export default function Clinica() {
  const [productoActivo, setProductoActivo] = useState<any>(null);
  return (
    <>
          {/* HERO*/}
          <section className="relative w-full h-[60vh] md:h-[45vh]">
            <video
         className="absolute inset-0 w-full h-full object-cover"
         src="/Web/shining 3d.mp4"
         autoPlay
         loop
         muted
         playsInline/>

            <div className="absolute inset-0 bg-gradient-to-l from-blue-700 via-blue-800/30 to-transparent">
              <div className="absolute top-5.5 left-70 md:top-10 md:left-260 z-20">
              <motion.img
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src="/Logos/Shining3d.png"
              alt="Shining"
              className="h-6 md:h-12   lg:h-7  w-auto"
           />

           </div>
           <div className="absolute top-1 left-52 md:top-2 md:left-235 z-20">
              <motion.img
              initial={{ opacity: 0, y:80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration:   1 }}
              src="/Logos/BalsasTrans.png"
              alt="Balsas"
              className="h-12 md:h-12   lg:h-17  w-auto"
              />

           </div> 
    
              <div className="relative z-10 h-full flex items-center justify-center md:justify-end px-6 md:px-12 lg:px-20">
                <div className="text-white max-w-xl text-center md:text-right">
                  <motion.h1
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 1.2 }}
                    className="text-3x1 sm:text-4x1 md:text-5x1 lg:text-4xl font-semibold md-4"
                  >
                    Clinica con Shining 3D
                  </motion.h1>
    
                  <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, delay: 0.3 }}
                    className="text-sm sm:text-base md:text-lg lg-text-xl mt-5"
                  >
                    Crece tu negocio con la mejor tecnología que ofrece Shining 3D.
                  </motion.p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative w-full bg-white to-gray-50 py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto gap-12 items-center relative z-10">

            {/* TEXTO */}
            <div className="">

              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8}}
                className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
              >
                Los mejores productos
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8}}
                className="text-gray-600 text-sm md:text-base mt-6 leading-relaxed max-w-md mx-auto text-center"
              >
                Cada producto se adapta a tus necesidades, haciendo que disfrutes más tu trabajo
                y ofreciendo a tus pacientes una experiencia profesional y confiable.
              </motion.p>

              {/* BENEFICIOS */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8}}
                className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700 justify-items-center"
              >
                <div className="flex items-center gap-2 justify-center text-xl text-black">
                  <span className="text-blue-600 text-2xl">✔</span>
                  Tecnología avanzada
                </div>

                <div className="flex items-center gap-3 justify-center text-xl text-black">
                  <span className="text-blue-600 text-2xl">✔</span>
                  Alta precisión
                </div>

                <div className="flex items-center gap-2 justify-center text-xl text-black">
                  <span className="text-blue-600 text-2xl">✔</span>
                  Soporte especializado
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
                {/* TARJETAS + PANEL DERECHO */}
          <section className="py-16 px-6 md:px-12 lg:px-20 bg-white ">
            <motion.h1
              className="text-center text-5xl text-black font-bold">
                Clínica
              </motion.h1>
              <h3
            className="text-xs uppercase font-semibold tracking-widest text-neutral-500 mb-3 text-center mt-3">
              Balsas x Shining 3D
            </h3>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 mt-10">
              {/* GRID ORIGINAL (NO CAMBIADO) */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:w-2/3">
              {productos.map((producto, index) => (
                  <motion.div
                      key={producto.id}
                      onClick={() => setProductoActivo(producto)}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      animate={{ scale: productoActivo?.id === producto.id ? 1.03 : 1 }}
                      className={`h-[320px] rounded-2xl overflow-hidden transition cursor-pointer border border-blue-600
                        ${
                          productoActivo?.id === producto.id
                            ? "bg-blue-600 from-blue-700/100 via-blue-100/10 to-white shadow-xl ring-2 ring-blue-700"
                            : "bg-white shadow-lg hover:shadow-2xl"
                        }`}
                    >
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full md:h-56 h-65 object-contain md:object-cover"
                    />
                    <div className="p-6">
                      <h3
                          className={`text-xl font-bold mb-4 text-center transition-colors duration-300
                          ${productoActivo?.id === producto.id ? "text-white " : "text-blue-700"}`}
                        >
                          {producto.nombre}
                        </h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* TARJETA DERECHA DINÁMICA */}
              <div className="lg:w-3/8 min-h-[520px]">
                <AnimatePresence mode="wait">
                  {productoActivo && (
                    <motion.div
                      key={productoActivo.id}
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 80 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-3xl shadow-2xl p-6 sticky top-10"
                    >
                      <button
                      onClick={() => setProductoActivo(null)}
                      className="self-end text-2xl hover:rotate-90 transition-transform duration-300 text-blue-800">
                        ✕
                      </button>

                     {/**<div className="flex items-center justify-center gap-4 mb-3">
                      <img
                      src="/Logos/logo balsas.png"
                      alt="Balsas"
                      className="w-15 h-auto">
                      </img>
                      
                      <img
                      src="/Logos/Shining.png"
                      alt="Shining 3D"
                      className="w-30 h-auto mt-3"></img>
                     </div> */}

                      <img
                        src={productoActivo.imagen}
                        alt={productoActivo.nombre}
                        className="w-full h-80 object-cover rounded-xl"
                      />

                      <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
                        {productoActivo.nombre}
                      </h2>

                     <div className="border-l-4 border-blue-600 pl-4">
                      <p className="whitespace-pre-line text-gray-700 text-[14px] leading-7">
                        {productoActivo.descripcion}
                      </p>
                    </div>
                    <a 
                   href={
                      productoActivo &&
                      (() => {
                        const asesorRandom = obtenerAsesorAleatorio();
                        return asesorRandom
                          ? generarLinkWhatsApp(
                              asesorRandom.telefono,
                              asesorRandom.nombre,
                              productoActivo.nombre
                            )
                          : "#";
                      })()
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    mt-5
                    w-full
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    bg-blue-800
                    hover:bg-blue-500
                    text-white
                    font-semibold
                    py-3
                    rounded-xl
                    shadow-md
                    transition">
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 16 16">
                       <path d="M13.601 2.326A7.854 7.854 0 0 0 8.008 0C3.584 0 .002 3.582.002 8.006c0 1.41.369 2.79 1.071 4.012L0 16l4.102-1.066a7.936 7.936 0 0 0 3.906 1.006h.003c4.423 0 8.005-3.582 8.005-8.006a7.91 7.91 0 0 0-2.415-5.608zM8.01 14.47a6.46 6.46 0 0 1-3.293-.898l-.236-.14-2.435.633.651-2.37-.154-.244a6.45 6.45 0 0 1-.99-3.445c0-3.568 2.903-6.47 6.47-6.47 1.728 0 3.35.673 4.573 1.895a6.42 6.42 0 0 1 1.898 4.575c-.002 3.568-2.904 6.47-6.464 6.47zm3.537-4.823c-.194-.097-1.146-.566-1.323-.63-.177-.065-.306-.097-.435.097-.129.194-.5.63-.612.758-.113.129-.226.145-.42.048-.194-.097-.82-.302-1.563-.963-.578-.516-.967-1.153-1.08-1.347-.113-.194-.012-.299.085-.396.087-.087.194-.226.29-.339.097-.113.129-.194.194-.323.065-.129.032-.242-.016-.339-.048-.097-.435-1.049-.596-1.437-.156-.374-.315-.323-.435-.329l-.371-.006c-.129 0-.339.048-.516.242-.177.194-.677.661-.677 1.613 0 .951.693 1.871.79 2 .097.129 1.366 2.086 3.313 2.925.463.2.823.319 1.104.408.464.148.886.127 1.22.077.372-.055 1.146-.468 1.308-.921.161-.452.161-.839.113-.921-.048-.081-.177-.129-.371-.226z"/>  
                      </svg>
                      "Cotizar"
                    </a>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!productoActivo && (
                  <div className="h-full flex items-center justify-center text-gray-400 text-center">
                    Selecciona un producto para ver más detalles
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
  );
}
