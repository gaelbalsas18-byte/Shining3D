"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Usoreal() {
  return (

    
    <section id="Usoreal" className="w-full bg-blue-700 overflow-hidden">
      
       <h2 className="text-white text-5xl font-bold text-center mt-5"> EXPERIENCIA</h2>
      {/* Parte de arriba */}
      <div className="relative w-full grid md:grid-cols-2 mt-10">

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
          className="relative h-[520px] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl group left-2 md:left-50 border-3 border-white"
        >

          <Image
            src="/Personal/Giancarlo.jpg"
            alt="Uso profesional"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

          {/* Texto */}
          <div className="absolute bottom-5 left-5 text-white max-w-[220px]">

            <h3 className="text-lg font-semibold">
              Tecnología dental
            </h3>
            <p className="text-xs text-gray-200 mt-1">
              Soluciones digitales para clínicas modernas.
            </p>

          </div>

        </motion.div>

        {/* Fondo gris */}
        <div className="bg-blue-700 relative h-[500px]" />

        <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute
        right-0
        md:right-[-100]
        top-140
        w-[350px]
        rounded-3xl
        md:top-85
        bg-white
        md:w-[420px]
        p-10
        shadow-2xl">
        </motion.div>

        {/* Tarjeta Blanca*/}
        <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute
        right-0
        top-140
        w-[350px]
        rounded-3xl
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
      <div className="relative w-full h-[600px] bg-blue-700">

        {/* overlay*/}
        <div className="absolute inset-0 " />
        <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute
        right-10
        md:left-[-100]
        top-50
        w-[350px]
        rounded-3xl
        md:top-85
        md:bg-white
        md:w-[420px]
        p-10
        shadow-2xl">
        </motion.div>
        {/* Tarjeta azul */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="
            absolute
            left-[5%]
            top-[-190]
            md:top-16
            rounded-3xl
            bg-white
            text-black
            w-[420px]
            md:w-[580px]
            p-10
            shadow-2xl
          "
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-600 p-4 text-xl text-white">
              ✏
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-600">
                Dr. Giancarlo
              </span>
              <h4 className="text-xl font-semibold mt-1">
                Especialmente fáciles de manejar
              </h4>
              <p className="text-sm text-black leading-relaxed">
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
            md:right-[10%]
            top-[100]
            rounded-3xl
            md:top-85
            bg-white
            md:w-[520px]
            w-[350px]
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
              <h4 className="text-xl font-semibold mt-1 text-black">
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

      <section className="w-full bg-white to-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    {/* TEXTO */}
    <div className="text-center md:text-left">

      <h2 className="text-3xl md:text-2xl font-bold text-gray-900">
        Tecnología que transforma tu clínica
      </h2>

      <p className="text-gray-600 text-sm md:text-base mt-6 leading-relaxed max-w-md mx-auto md:mx-0">
        Nuestros equipos están diseñados para mejorar la precisión, velocidad
        y experiencia del flujo digital en odontología, permitiendo que tu
        clínica alcance un nuevo nivel tecnológico.
      </p>

      {/* BENEFICIOS */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-10 grid grid-cols-2 gap-6 text-sm"
      >

        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-xl">⚡</span>
          <p className="text-gray-700">Escaneo rápido</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-xl">🎯</span>
          <p className="text-gray-700">Alta precisión</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-xl">🔬</span>
          <p className="text-gray-700">Tecnología avanzada</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-xl">🦷</span>
          <p className="text-gray-700">Flujo digital completo</p>
        </div>

      </motion.div>

    </div>

    {/* TARJETAS VISUALES */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="grid grid-cols-2 gap-6"
    >

      {/* CARD 1 */}
      <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
       className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition">

        <div className="text-3xl mb-3">🦷</div>

        <h3 className="font-semibold text-blue-600">
          Escáner 3D
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Captura digital precisa para diagnósticos avanzados.
        </p>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition">

        <div className="text-3xl mb-3">⚙</div>

        <h3 className="font-semibold text-blue-600">
          Flujo digital
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Integración completa con software dental profesional.
        </p>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition">

        <div className="text-3xl mb-3">📊</div>

        <h3 className="font-semibold text-blue-600">
          Análisis avanzado
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Datos precisos para mejorar los resultados clínicos.
        </p>

      </motion.div>

      {/* CARD 4 */}
      <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition">

        <div className="text-3xl mb-3">🚀</div>

        <h3 className="font-semibold text-blue-600">
          Mayor productividad
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Reduce tiempos de trabajo y mejora tu flujo clínico.
        </p>

      </motion.div>

    </motion.div>

  </div>

</section>

    </section>

    
  );
}