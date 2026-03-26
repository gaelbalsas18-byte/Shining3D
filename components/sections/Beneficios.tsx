"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Beneficios() {
  return (

    <section
      id="Beneficios"
      className="relative w-full bg-white py-16 px-6 overflow-hidden">
      {/* CONTENIDO GENERAL */}
      <div className="relative z-10">
        {/* CONTENEDOR 1 — TITULO */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-semibold mb-4 text-black">
              CATEGORIAS
            </h3>
            <h3
            className="text-xs uppercase text-black font-semibold tracking-widest text-neutral-500 mb-3 text-center">
              Balsas x Shining 3D
            </h3>
          </div>
        </div>

        {/* CONTENEDOR 2 — PANELES */}
        <div className="w-full max-w-[1220px] mx-auto mb-20 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* PANEL 1  Clinica*/}
            <Link href="/Clinica" className="block group">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-72 md:h-96 lg:h-[420px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group-hover:scale-105 border-3 border-black">
             <img
                src="/Productos/ClinicaS/Aoralscan.jpg"
                alt="Clínica Dental"
                className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
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
            
            {/* PANEL 2 Laboratorio*/}
             <Link href="/Laboratorio" className="block group">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-72 md:h-96 lg:h-[420px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group-hover:scale-105 border-3 border-black"
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

            {/* PANEL 3 Impresion*/}
            <Link href="/Impresora" className="block group">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-72 md:h-96 lg:h-[420px] xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group-hover:scale-105 border-3 border-black"
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
          <h3 className=" uppercase tracking-widest text-3xl font-semibold mb-2 text-black">
            Beneficios Shining 3D
          </h3>
        </div>

        {/* BENEFICIOS */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* CARD 1 DESTACADA */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-blue-700 text-white rounded-3xl p-8 shadow-2xl scale-90 text-center"
                >
                  <h3 className="font-semibold text-lg mb-1">
                    Precisión Digital Avanzada.
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                  Los escáneres intraorales de Shining 3D capturan imágenes 3D de alta precisión,
                  facilitando diagnósticos más exactos y una mejor planificación,
                  lo que reduce errores y mejora los resultados y la satisfacción del paciente.
                  </p>
                </motion.div>

                {/* CARD 2 DESTACADA */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-blue-700 text-white rounded-3xl p-8 shadow-2xl scale-90 text-center"
                >
                  <h3 className="font-semibold text-lg mb-1">
                    Trabajo Más Eficiente.
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                 La digitalización del escaneo elimina impresiones tradicionales,
                 reduce tiempos clínicos y agiliza la comunicación con el laboratorio,
                 Los archivos se envían de forma inmediata, 
                 permitiendo procesos más rápidos y mayor productividad en la clínica.
                  </p>
                </motion.div>

                {/*CARD 3 DESTACADA */}
                <motion.div
                initial={{ opacity: 0, y: 60}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8}}
                className="bg-blue-700 text-white rounded-3xl p-8 shadow-2xl scale-90 text-center">
                  <h3 className="font-semibold text-lg mb-1">
                    Experiencia Moderna.
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Al reemplazar los moldes tradicionales por tecnología digital,
                    el proceso es más limpio, rápido y cómodo, mejorando la experiencia del paciente
                    y reforzando la imagen profesional de la clínica, lo que fortalece la confianza y fidelización.
                  </p>

                </motion.div>
        </div>
      </div>
    </section>
  );
}
