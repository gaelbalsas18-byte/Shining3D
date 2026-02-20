"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Capacitacion() {
  const [vista, setVista] = useState("inicio");
  const [index, setIndex] = useState(0);
  const images = [
    "/Carrusel/Carrusel1.jpg",
    "/Carrusel/Carrusel2.jpeg",
    "/Carrusel/Carrusel3.png",
  ];
  const personas = [

    {
      id: "1",
      categoria: ["capacitacion", "asesores"],
      nombre: "Fernando Santamaría Ríos",
      descripcion: "Gerente Comercial",
      correo: "direcciongeneral@balsasdental.com",
      telefono: "5554076025",
      imagen: "/Personal/Fernando.jpg",
    },

    {
      id: "2",
      categoria: ["capacitacion", "mantenimiento", "asesores"],
      nombre: "Dr. Giancarlo Graber",
      descripcion: "Asesor Comercial, Dentista y Cosultorio Dental",
      correo: "contacto@drtrading.mx",
      telefono: "5549363462",
      imagen: "/doctor1.jpg",
    },

    {
      id: "6",
      categoria: ["mantenimiento", "asesores"],
      nombre: "Humberto Corvera Santillan",
      descripcion: "Asesor Técnico Dental",
      correo: "humberto@bioden.mx",
      telefono: "5580345711",
      imagen: "/Personal/humberto.jpg",
    },

    {
      id: "7",
      categoria: "asesores",
      nombre: "Alejandro Ubaldo Hernández",
      descripcion: "Asesor Clinico Dental",
      correo: "alejandro.ubaldo@balsasdental.com",
      telefono: "5510494292",
      imagen: "/Personal/Alejandro.jpg",
    },

    {
      id: "8",
      categoria: "asesores",
      nombre: "Ana Elena Miranda",
      descripcion: "Asesor Clinico Dental",
      correo: "elena.miranda@balsasdental.com",
      telefono: "5581019640",
      imagen: "/Personal/Ana.jpg",
    },

  ];

  // Carrusel automático
  useEffect(() => {
    if (vista !== "inicio") return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [vista]);
  return (
    <section id="Capacitacion" className="pb-20 bg-white">

      {/* TITULO */}
      <div className="max-w-6xl mx-auto text-center pt-20">
        <h3 className="text-5xl font-semibold text-blue-700 ">
          NOSOTROS
        </h3>
      </div>

      {/* BOTONES */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <motion.button
            onClick={() =>
              setVista(vista === "capacitacion" ? "inicio" : "capacitacion")
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-6 bg-white text-blue-700 rounded-2xl text-xl font-semibold hover:bg-blue-600 hover:text-white border border-blue-700"
          >
            CAPACITACIÓN
          </motion.button>

          <motion.button
            onClick={() =>
              setVista(vista === "mantenimiento" ? "inicio" : "mantenimiento")
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-6 bg-white text-blue-700 rounded-2xl text-xl font-semibold hover:bg-blue-600 hover:text-white border border-blue-700"
          >
            MANTENIMIENTO
          </motion.button>

          <motion.button
            onClick={() =>
              setVista(vista === "asesores" ? "inicio" : "asesores")
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-6 bg-white text-blue-700 rounded-2xl text-xl font-semibold hover:bg-blue-600 hover:text-white border border-blue-700"
          >
            ASESORES
          </motion.button>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        {vista === "inicio" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-72 md:h-96 lg:h-[550px] overflow-hidden rounded-3xl shadow-xl">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[index]}
                  alt="Capacitación"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div>
              <motion.h3 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
                Formación Especializada
              </motion.h3>
              <motion.p 
              initial={{ opacity: 0, y: 60}}
              animate={{ opacity: 1, y:  0}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-black leading-relaxed">
                 Ofrecemos programas de capacitación diseñados para profesionales
                 que buscan dominar el uso de tecnología avanzada en escaneo 3D y
                 soluciones digitales. Nuestro enfoque combina teoría y práctica
                 para garantizar resultados inmediatos en clínica o laboratorio.
              </motion.p>
            </div>
          </div>
        )}
        {vista !== "inicio" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {personas
              .filter((persona) => persona.categoria.includes(vista))
              .map((persona, i) => (
                <motion.div
                  key={persona.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-blue-700 text-white rounded-3xl shadow-xl overflow-hidden"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={persona.imagen || "/placeholder.jpg"}
                      alt={persona.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {persona.nombre}
                      </h3>
                      <p className="text-white/80 mb-4 text-sm">
                        {persona.descripcion}
                      </p>
                      <div className="text-sm space-y-1">
                        <p><strong>Correo:</strong> {persona.correo}</p>
                        <p><strong>Tel:</strong> {persona.telefono}</p>
                      </div>
                      {/* BOTÓN WHATSAPP */}
                      <a
                        href={`https://wa.me/52${persona.telefono.replace(/\s/g, "")}?text=Hola%20${encodeURIComponent(persona.nombre)},%20me%20interesa%20recibir%20información%20sobre%20${vista}%20en%20Shining%203D`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-5
                          w-full
                          inline-flex
                          items-center
                          justify-center
                          gap-3
                          bg-green-500
                          hover:bg-green-600
                          text-white
                          font-semibold
                          py-3
                          rounded-xl
                          shadow-md
                          transition
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 8.008 0C3.584 0 .002 3.582.002 8.006c0 1.41.369 2.79 1.071 4.012L0 16l4.102-1.066a7.936 7.936 0 0 0 3.906 1.006h.003c4.423 0 8.005-3.582 8.005-8.006a7.91 7.91 0 0 0-2.415-5.608zM8.01 14.47a6.46 6.46 0 0 1-3.293-.898l-.236-.14-2.435.633.651-2.37-.154-.244a6.45 6.45 0 0 1-.99-3.445c0-3.568 2.903-6.47 6.47-6.47 1.728 0 3.35.673 4.573 1.895a6.42 6.42 0 0 1 1.898 4.575c-.002 3.568-2.904 6.47-6.464 6.47zm3.537-4.823c-.194-.097-1.146-.566-1.323-.63-.177-.065-.306-.097-.435.097-.129.194-.5.63-.612.758-.113.129-.226.145-.42.048-.194-.097-.82-.302-1.563-.963-.578-.516-.967-1.153-1.08-1.347-.113-.194-.012-.299.085-.396.087-.087.194-.226.29-.339.097-.113.129-.194.194-.323.065-.129.032-.242-.016-.339-.048-.097-.435-1.049-.596-1.437-.156-.374-.315-.323-.435-.329l-.371-.006c-.129 0-.339.048-.516.242-.177.194-.677.661-.677 1.613 0 .951.693 1.871.79 2 .097.129 1.366 2.086 3.313 2.925.463.2.823.319 1.104.408.464.148.886.127 1.22.077.372-.055 1.146-.468 1.308-.921.161-.452.161-.839.113-.921-.048-.081-.177-.129-.371-.226z"/>
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                </motion.div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
