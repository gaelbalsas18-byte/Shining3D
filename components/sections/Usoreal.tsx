"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Usoreal() {
  return (
    <section id="Usoreal" className="w-full bg-white overflow-hidden">
      {/* Parte de arriba */}
      <div className="relative w-full grid md:grid-cols-2">

        {/* Imagen */}
        <div className="relative h-[500px]">
          <Image
            src="/Experiencias/exp2.jpeg"
            alt="Uso profesional"
            fill
            className="object-cover"
          />
        </div>

        {/* Fondo gris */}
        <div className="bg-gray-100 relative h-[500px]" />

        {/* Tarjeta Blanca*/}
        <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute
        right-0
        top-95
        w-[350px]
        md:top-23
        bg-white
        md:w-[420px]
        p-10
        shadow-2xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-600 p-4 text-white text-xl">
              👁
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-600">
                Pregunta 1
              </span>
              <h4 className="font-semibold font-mono text-black mt-1 text-xl">
                ¿Que tan dificil es trabajar con un escaner de Shining 3D? 
              </h4>
            </div>
          </div>
          <p className="text-sm text-black leanding-relaxed">
          </p>
        </motion.div>
      </div>

      {/* Parte de Abajo*/}
      <div className="relative w-full h-[600px] bg-blue-600">

        {/* overlay*/}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        {/* Tarjeta azul */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="
            absolute
            left-[15%]
            top-5
            md:top-16
            bg-blue-600
            text-white
            w-[380px]
            p-10
            shadow-2xl
          "
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-white/20 p-4 text-xl">
              ✏
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest">
                Dr. Gianrcarlo
              </span>
              <h4 className="text-lg font-semibold mt-1">
                Especialmente fáciles de manejar
              </h4>
              <p className="text-sm text-white leading-relaxed">
              Cada producto viene acompañado de lo necesario
              para trabajar, limpiar o cambiar sus repuestos
              sin buscar herramientas adicionales.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* tarjeta blanca */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="
            absolute
            right-[10%]
            top-83
            md:top-85
            bg-white
            w-[380px]
            p-8
            shadow-2xl
          "
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-600 p-4 text-white text-xl">
              🔧
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-600">
                todo incluido
              </span>
              <h4 className="text-lg font-semibold mt-1 text-black">
                Incluyen sus propias herramientas
              </h4>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Cada producto viene acompañado de lo necesario
            para trabajar, limpiar o cambiar sus repuestos
            sin buscar herramientas adicionales.
          </p>
        </motion.div>
      </div>
    </section>
  );
}