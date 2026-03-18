"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Beneficios() {
  return (
    
    <section
      id="Beneficios"
      className="relative w-full bg-white py-16 px-6 overflow-hidden"
    >
      {/* CONTENIDO GENERAL */}
      <div className="relative z-10">
        {/* CONTENEDOR 1 — TITULO */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-semibold mb-4 text-black">
              CATEGORIAS
            </h3>
          </div>
        </div>

        {/* CONTENEDOR 2 — PANELES */}
        <div className="w-full max-w-[1220px] mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* PANEL 1 */}
            <Link href="/Clinica" className="block group">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-72 md:h-96 lg:h-[420px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group-hover:scale-105 border-3 border-blue-600"
            >
             <img
                  src="/Productos/ClinicaS/aoralscan.jpg"
                  alt="Clínica Dental"
                  className="absolute inset-0 w-full h-full object-cover"
               />
                {/* Overlay dinámico */}
                <div className="absolute inset-0 group-hover:bg-black/70 transition-all duration-500" />

                <div className="relative z-10 flex items-center justify-center h-full">
                  <h2 className="text-transparent group-hover:text-white text-3xl md:text-4xl lg:text-3xl font-bold transition-colors duration-500">
                    CLÍNICA
                  </h2>
                </div>
              </motion.div>
            </Link>
            
            {/* PANEL 2 */}
             <Link href="/Laboratorio" className="block group">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-72 md:h-96 lg:h-[420px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group-hover:scale-105 border-3 border-blue-600"
              >
                <img
                  src="/Productos/LaboratorioS/DS EX H.jpg"
                  alt="LaboratorioS"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay dinámico */}
                <div className="absolute inset-0 group-hover:bg-black/70 transition-all duration-500" />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <h2 className="text-transparent group-hover:text-white text-3xl md:text-4xl lg:text-3xl font-bold transition-colors duration-500">
                    LABORATORIO
                  </h2>
                </div>
              </motion.div>
            </Link>
            {/* PANEL 3 */}
            <Link href="/Impresora" className="block group">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-72 md:h-96 lg:h-[420px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group-hover:scale-105 border-3 border-blue-700"
              >
                <img
                  src="/Productos/Impresoras/Acuafast L4D.jpg"
                  alt="Impresora"
                  className="absolute inset-0 w-full h-full object-cover "
                />

                {/* Overlay dinámico */}
                <div className="absolute inset-0 group-hover:bg-black/70 transition-all duration-500" />

                <div className="relative z-10 flex items-center justify-center h-full">
                  <h2 className="text-transparent group-hover:text-white text-3xl md:text-4xl lg:text-3xl font-bold transition-colors duration-500">
                    IMPRESIÓN 3D
                  </h2>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* TITULO BENEFICIOS */}
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-semibold mb-4 text-black">
            Beneficios de Shining 3D
          </h3>
        </div>

        {/* BENEFICIOS */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <motion.h3
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }} 
            className="text-2xl font-semibold mb-4 text-blue-700">
              Precisión Digital Avanzada.
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
              className="max-w-3xl mx-auto mt-1"
            >
              <div className="bg-blue-700 rounded-2xl shadow-xl border border-gray
              -100 p-6 md:p-8">
                <p className="text-white text-sm md:text-base leading-relaxed text-center">
                  Los escáneres intraorales de Shining 3D 
                  capturan imágenes tridimensionales con alto nivel de detalle, permitiendo diagnósticos 
                  más precisos y una mejor planificación de tratamientos.
                  Esta exactitud reduce errores en prótesis, ortodoncia e implantología, 
                  mejorando la calidad del resultado final y la satisfacción del paciente.
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.h3 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-2xl font-semibold mb-4 text-blue-700">
              Trabajo Más Eficiente.
            </motion.h3>

            <motion.div
             initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.3 }}>
              <div className="bg-blue-700 rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <p className="text-white text-sm md:text-base leading-relaxed text-center">
              La digitalización del escaneo elimina la necesidad de impresiones tradicionales, 
              reduciendo tiempos clínicos y optimizando la comunicación con el laboratorio. Los archivos se envían de forma inmediata, 
              acelerando los procesos y permitiendo a la clínica atender más pacientes con mayor organización y productividad.
            </p>
            </div>
            </motion.div>
          </div>
          
          <div>
            <motion.h3
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-2xl font-semibold mb-4 text-blue-700">
              Experiencia Moderna.
            </motion.h3>
            <motion.div
            initial={{ opacity: 0, y: 60 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.3 }}>
              <div className="bg-blue-700 rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <p className="text-white text-sm md:text-base leading-relaxed text-center">
              Al sustituir los moldes convencionales por tecnología digital, 
              el procedimiento se vuelve más limpio, rápido y cómodo. Esto no solo mejora la experiencia del paciente en consulta, 
              sino que también proyecta una imagen innovadora y profesional de la clínica, fortaleciendo la confianza y fidelización.
              "Siendo el principal objetivo para los clientes"
            </p>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
