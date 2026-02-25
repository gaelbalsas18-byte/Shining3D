"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const productos = [

  {
    id: 1,
    nombre: "Acuafast Cel",
    descripcion: "Una solución fiable y con precisión, Precisión de impresión alta de 35 μm, Tecnología CPL, Plataforma Cerámica Flexible, Control Inteligente de la Cabina, Permite múltiples impresións con un solo clic en diferentes aplicaciones dentales, como restauración, C&B, férula, guía quirúrgica, modelo ortodóncico, etc. SHINING 3D es la primera empresa en diseñar una plataforma cerámica",
    imagen: "/Productos/Equipos/Cel.jpg",
  },

  {
    id: 2,
    nombre: "Acuafast L4D",
    descripcion: "Salida Consistente y Flujo de Trabajo Optimizado, Precisión sin igual, Sistema de Refrigeración Avanzado, Tamaño de impresión grande, resolución 4K, Los tamaños de impresión 70*70mm y 192*120mm y la resolución 4K satisfacen las demandas de los usuarios en cuanto a eficiencia y detalle. Óptica de grado industrial, Robustez de última generación Y Sistema de Refrigeración de Distrito",
    imagen: "Productos/Equipos/Acuafast L4D.png",
  },

  {
    id: 3,
    nombre: "Curning",
    descripcion: "Impresora shining 3D 1.0",
    imagen: "/Productos/Equipos/Curning.jpg",
  },
  
  {
    id:4,
    nombre: "Washing",
    descripcion: "Soluciones Automatizadas Fabwash, es el primer sistema totalmente automatizado, de liberación de piezas, lavado y secado, diseñado para proporcionar la facilidad de uso, consistencia, rapidez y limpieza que exige la impresión dental 3D moderna, está preprogramado para cada material con un proceso automático de liberación, lavado y secado de piezas.",
    imagen: "/Productos/Equipos/wash.jpg",
  },
];

export default function Impresora() {
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
                Equipos con Shining 3D
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
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
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
