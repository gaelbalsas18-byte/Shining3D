"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

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

      {/* ===== Pied de pagina ===== */}
        <footer className="w-full bg-blue-700 py-14">
          <div className="max-w-6xl mx-auto px-6">

            <div className="flex justify-center items-center gap-8 mb-6">
              <img
                src="/Logos/BalsasTrans.png"
                alt="Balsas"
                className="h-16 md:h-20 w-auto"
              />

              <img
                src="/Logos/Shining3d.png"
                alt="Shining 3D"
                className="h-10 md:h-14 w-auto"
              />
            </div>
            <p className="text-white text-lg text-center font-semibold">
              © 2026 Shining 3D México. Todos los derechos reservados. <br />
              © 2026 Balsas Dental. Todos los derechos reservados.
            </p>
            {/* Redes Balsas*/}
            <div className="flex justify-center items-center gap-6 mb-6 mt-7">
              <a
              href="https://www.facebook.com/BalsasDentalmx"
              target="_blank"
              className="text-white hover:text-blue-200 transition">
                <Facebook size={33}/>
              </a>
              <a
              href="https://www.instagram.com/balsasdentalmx/"
              target="_blank"
              className="text-white hover:text-blue-200 transition">
                <Instagram size={33}/>
              </a>
            </div>
          </div>
        </footer>
    </>
  );
}
