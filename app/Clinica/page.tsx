"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const productos = [

  {
    id: 1,
    nombre: "Aoralscan 3",
    descripcion: "Flujo de escaneo suave. Precisión superior. Mayor profundidad. Aoralscan 3 combina un diseño moderno con velocidad ultrarrápida, alta precisión y procesamiento avanzado con IA. Su punta estándar ofrece un campo de visión de 16 mm x 12 mm x 22 mm, logrando capturas más rápidas y exactas.",
    imagen: "/Productos/Clinica/Aoralscan.jpg",
  },

  {
    id: 2,
    nombre: "Aoralscan Elite",
    descripcion: "Sistema dos en uno. Alta precisión. Máxima eficiencia. El Aoralscan Elite integra un diseño compacto y ultraligero con un rendimiento excepcional. Su estructura ergonómica permite un ajuste cómodo en una sola mano, mejorando la usabilidad y la experiencia durante el escaneo. Peso: 124 g Dimensiones: 245 × 30 × 26 mm",
    imagen: "/Productos/Clinica/aoralscan elite.jpg",
  },

  {
    id: 3,
    nombre: "Aoralscan Lync",
    descripcion: "Escaneo más rápido. Mayor precisión. Mayor profundidad de captura. Aoralscan L está diseñada para adaptarse a diversos escenarios clínicos, desde la adquisición de cuerpos de escaneo hasta exploraciones periodontales. Permite realizar los procedimientos con mínima interacción con el ordenador, brindando una experiencia más segura, fluida y eficiente para el profesional.",
    imagen: "/Productos/Clinica/Aoralscan.jpg",
  },

  {
    id: 4,
    nombre: "Meti Small",
    descripcion: "Análisis integral y precisión digital avanzada. Permite registrar el movimiento mandibular, realizar análisis estético facial, simulaciones ortodónticas y diseño digital de sonrisa. Soporta segmentación directa de datos DICOM y autoalineación, integrando datos multimodales en un único sistema de coordenadas",
    imagen: "/Productos/Clinica/meti small.png",
  },
  
];

export default function Clinica() {
  const [productoActivo, setProductoActivo] = useState<any>(null);
  return (
    <>
          {/* HERO*/}
          <section className="relative w-full h-[45vh] md:h-[40vh]">
            <img
              src="#"
              alt="clinicaS" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-800">
              <div className="absolute top-5.5 left-72 md:top-10 md:left-400 z-20">
                <motion.img
                  src="/Logos/Shining3d.png"
                  alt="Shining"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                  className="h-6 md:h-12 lg:h-12 w-auto"
                />
              </div>
    
              <div className="absolute top-1 left-54 md:top-2 md:left-365 z-20">
                <motion.img
                  src="/Logos/BalsasTrans.png"
                  alt="Balsas"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                  className="h-12 md:h-12 lg:h-23 w-auto"
                />
              </div>
    
              <div className="relative z-10 h-full flex items-center justify-center md:justify-end px-6 md:px-12 lg:px-20">
                <div className="text-white max-w-xl text-center md:text-right">
                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
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
    
                {/* TARJETAS + PANEL DERECHO */}
          <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
              
              {/* GRID ORIGINAL (NO CAMBIADO) */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:w-2/3">
                {productos.map((producto, index) => (
                  <motion.div
                    key={producto.id}
                    onClick={() => setProductoActivo(producto)} // 👈 CLICK
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    animate={{ scale: productoActivo?.id === producto.id ? 1.03 : 1,}}
                    className={`rounded-2xl overflow-hidden transition cursor-pointer
                      ${
                        productoActivo?.id === producto.id
                          ? "bg-gradient-to-t from-blue-600/70 via-blue-100/60 to-white backdrop-blur-sm shadow-xl ring-2 ring-blue-500"
                          : "bg-white shadow-lg hover:shadow-2xl"}`}>
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-blue-700 text-center">
                        {producto.nombre}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            
              {/* TARJETA DERECHA DINÁMICA */}
              <div className="lg:w-1/3 min-h-[350px]">
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

                      <img
                        src={productoActivo.imagen}
                        alt={productoActivo.nombre}
                        className="w-full h-60 object-cover rounded-xl mb-6"
                      />
    
                      <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
                        {productoActivo.nombre}
                      </h2>

                     <div className="border-l-4 border-blue-600 pl-4">
                      <p className="text-gray-700 text-[15px] leading-7 mt-2">
                        {productoActivo.descripcion}
                      </p>
                    </div>
                      
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
