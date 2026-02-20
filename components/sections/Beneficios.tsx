"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Beneficios() {
  return (
    <section
      id="Beneficios"
      className="relative w-full bg-white py-16 px-6 overflow-hidden"
    >
      {/* IMAGEN DECORATIVA DE FONDO IZQUIERDA */}
      <motion.img
        src="/1.png"
        alt=""
        transition={{}}
        className="
          absolute
          top-0
          left-0
          w-50 md:w-96 lg:w-[720px]
          pointer-events-none
          select-none
          z-0
        "
      />

      {/* CONTENIDO GENERAL */}
      <div className="relative z-10">
        {/* CONTENEDOR 1 — TITULO */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-semibold mb-4 text-blue-700">
              CATEGORIAS
            </h3>
          </div>
        </div>

        {/* CONTENEDOR 2 — PANELES */}
        <div className="w-full max-w-[1400px] mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* PANEL 1 */}
            <Link href="/Clinica" className="block"> 
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-72 md:h-96 lg:h-[420px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <img
                src="/Productos/aoralscan.jpg"
                alt="Clínica Dental"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-blue-800 text-3xl md:text-4xl lg:text-5xl font-bold">
                  CLÍNICA
                </h2>
              </div>
            </motion.div>
            </Link>
            

            {/* PANEL 2 */}
            <Link href="/Laboratorio">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-72 md:h-96 lg:h-[420px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <img
                src="/Productos/escaner.jpg"
                alt="Laboratorio"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-blue-800 text-3xl md:text-4xl lg:text-5xl font-bold">
                  LABORATORIO
                </h2>
              </div>
            </motion.div>
            </Link>

            {/* PANEL 3 */}
            <Link href="/Impresora">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-72 md:h-96 lg:h-[420px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <img
                src="/Productos/impresora-3d.jpg"
                alt="Impresoras"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-blue-800 text-3xl md:text-4xl lg:text-5xl font-bold">
                  IMPRESORAS
                </h2>
              </div>
            </motion.div>
            </Link>

          </div>
        </div>

        {/* TITULO BENEFICIOS */}
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-semibold mb-4 text-blue-700">
            BENEFICIOS DE SHINING 3D
          </h3>
        </div>

        {/* BENEFICIOS */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          <div>
            <motion.h3
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }} 
            className="text-2xl font-semibold mb-4 text-blue-700">
              Precisión Digital Avanzada.
            </motion.h3>
            <motion.p 
            initial={{ opacity: 0, y: 80}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1}}
            className="text-black">
              Los escáneres intraorales de Shining 3D capturan imágenes tridimensionales con alto nivel de detalle, 
              permitiendo diagnósticos más precisos y una mejor planificación de tratamientos. 
              Esta exactitud reduce errores en prótesis, ortodoncia e implantología, 
              mejorando la calidad del resultado final y la satisfacción del paciente.
            </motion.p>
          </div>

          <div>
            <motion.h3 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 1    }}
            className="text-2xl font-semibold mb-4 text-blue-700">
              Trabajo Más Eficiente.
            </motion.h3>
            <motion.p 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 1    }}
            className="text-black">
              La digitalización del escaneo elimina la necesidad de impresiones tradicionales, 
              reduciendo tiempos clínicos y optimizando la comunicación con el laboratorio. Los archivos se envían de forma inmediata, 
              acelerando los procesos y permitiendo a la clínica atender más pacientes con mayor organización y productividad.
            </motion.p>
          </div>

          <div>
            <motion.h3
            initial={{ opacity: 0, y: 80}}
            animate={{ opacity: 1, y:  0}}
            transition={{ duration: 1   }}
            className="text-2xl font-semibold mb-4 text-blue-700">
              Experiencia Moderna.
            </motion.h3>
            <motion.p 
            initial={{ opacity: 0, y: 80}}
            animate={{ opacity: 1, y:  0}}
            transition={{ duration:    1}}
            className="text-black">
              Al sustituir los moldes convencionales por tecnología digital, 
              el procedimiento se vuelve más limpio, rápido y cómodo. Esto no solo mejora la experiencia del paciente en consulta, 
              sino que también proyecta una imagen innovadora y profesional de la clínica, fortaleciendo la confianza y fidelización.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
