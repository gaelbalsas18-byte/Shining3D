"use client";
import { motion } from "framer-motion";


export default function Emocional() {
  return (
    <>
      
      {/* ===== SECCIÓN GRIS ===== */}
      <section
        id="Emocional"
        className="w-full bg-gray-500 py-24"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-semibold mb-14 text-blue-700">
            ACERCA DE...
          </h3>
          {/* Logo centrado arriba */}
          <div className="flex justify-center mb-16">
            <img
              src="/Logos/Shining.png"
              alt="Shining"
              className="h-24 md:h-20 lg:h-30 w-auto"
            />
          </div>

          {/* Contenido en columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* HISTORIA */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                HISTORIA.
              </h3>

              <p className="text-black text-lg leading-relaxed">
                Desde 2004, SHINING 3D ha estado desarrollando hardware y software
                de escaneo 3D avanzado y accesible. Durante más de 20 años,
                la empresa se ha centrado en la I&D y la fabricación de escáneres
                3D de alta precisión, que capacitan a profesionales de todo el
                mundo en metrología industrial, inspección de campo completo,
                modelado 3D, ingeniería inversa y odontología digital.
              </p>
            </motion.div>

            {/* SHINING 3D */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                SHINING 3D.
              </h3>
              <p className="text-black text-lg leading-relaxed">
                Nuestro compromiso con la innovación está impulsado por nuestro
                equipo. Enfoque dedicado a la tecnología de visión 3D de alta
                precisión, SHINING 3D ha desarrollado un sólido portafolio de
                productos de calidad. La misión de la empresa es proporcionar
                tecnología de visión 3D que mejore la eficiencia, mejore la
                calidad y optimice la rentabilidad en los procesos de diseño
                y fabricacion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
