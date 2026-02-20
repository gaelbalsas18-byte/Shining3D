"use client";
import { motion } from "framer-motion";

export default function Usoreal (){
  return(
    <section
      id="Usoreal"
      className="relative w-full bg-gray-500 py-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-5xl font-semibold mb-12 mt-16 text-blue-700">
          EXPERIENCIA
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ===== BLOQUE 1 (imagen izquierda / texto derecha) ===== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="/Carrusel.jpg"
              alt="Capacitación"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              MI EXPERIENCIA CON EL SCANNER DE SHINING 3D
            </h3>

            <p className="text-black text-lg leading-relaxed">
              La tecnología de escaneo intraoral permite a los profesionales
              trabajar de forma más rápida, precisa y cómoda. Desde el diagnóstico
              hasta la planificación del tratamiento, el flujo digital mejora la
              experiencia tanto del especialista como del paciente.
            </p>
          </motion.div>

          {/* ===== BLOQUE 2 (texto izquierda / imagen derecha en desktop) ===== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left md:order-1"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              MI EXPERIENCIA CON EL SCANNER DE SHINING 3D
            </h3>

            <p className="text-black text-lg leading-relaxed">
              La tecnología de escaneo intraoral permite a los profesionales
              trabajar de forma más rápida, precisa y cómoda. Desde el diagnóstico
              hasta la planificación del tratamiento, el flujo digital mejora la
              experiencia tanto del especialista como del paciente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-xl md:order-2"
          >
            <img
              src="/Carrusel.jpg"
              alt="Capacitación"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
