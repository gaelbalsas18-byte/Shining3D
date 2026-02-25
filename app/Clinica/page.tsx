"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const productos = [

  {
    id: 1,
    nombre: "Aoralscan 3",
    descripcion: "Flujo de barrido suave, Precisión sobresaliente, Profundidad de barrido extendida, Aoralscan 3 presenta un diseño llamativo combinado con velocidad vertiginosa, escaneo de alta precisión, procesamiento avanzado de IA y herramientas de comunicación intuitivas.La punta estándar proporciona un campo de visión de 16 mm x 12 mm x 22 mm para un escaneo más rápido y preciso.",
    imagen: "/Productos/Clinica/Aoralscan.jpg",
  },

  {
    id: 2,
    nombre: "Aoralscan Elite",
    descripcion: "Sistema dos en uno, alta presición, alta eficiencia, El escáner intraoral Aoralscan Elite combina un tamaño compacto y una estructura ligera. El diseño ergonómico permite que el Elite encaje cómodamente en una mano, mejorando la usabilidad y la comodidad.Ultraligero (124g) Dimensiones compactas (245x30x26mm).",
    imagen: "/Productos/Clinica/aoralscan elite.jpg",
  },

  {
    id: 3,
    nombre: "Aoralscan Lync",
    descripcion: "Escaneo más rápido, Mayor precisión, Mayor profundidad de escaneo, La Aoralscan L es adecuada para diversos escenarios clínicos, incluyendo la adquisición de cuerpos de escaneo y las exploraciones periodontales, Los dentistas pueden realizar exploraciones con un contacto mínimo con el ordenador, garantizando una experiencia segura, fluida y eficiente.",
    imagen: "/Productos/Clinica/Aoralscan.jpg",
  },

  {
    id: 4,
    nombre: "Meti Small",
    descripcion: "Movimiento de la mandíbula, Análisis estético facial, Simulación facial ortodóntica, Diseño de Sonrisas Digitales, Soporta segmentación directa de datos DICOM y autoalineación, Datos multimodales alineados y analizados en un solo sistema de coordenadas, Compatible con el software exocad, Capturando con precisión el movimiento mandibular del paciente con MetiSmile-MR e integrando los datos de la exploración intraoral, se pueden obtener contactos oclusales dinámicos digitales",
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
            {/*TARJETAS*/}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
          {/* GRID ORIGINAL*/}
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
                      : "bg-white shadow-lg hover:shadow-2xl"
                  }
                `}
                >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {producto.nombre}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          {/* TARJETA DERECHA */}
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
                  <h2 className="text-2xl font-bold mb-4 text-black">
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
                Selecciona un producto para ver más detalles.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
