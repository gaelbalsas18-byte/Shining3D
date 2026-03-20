"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { label: "Productos / Beneficios", href: "#Beneficios", id: "Beneficios" },
  { label: "Experiencia", href: "#Emocional", id: "Emocional" },
  { label: "Capacitación", href: "#Capacitacion", id: "Capacitacion" },
];

export default function MenuLateral() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const closeMenu = () => setOpen(false);

  /* ===== SCROLL SPY ===== */
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      links.forEach((link) => {
        const el = document.getElementById(link.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = link.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    {/*Boton Flotante*/}
    {!open &&(
      <button
      onClick={() => setOpen(true)}
      className="fixed left-0 top-1/2 -translate-y-1/2
                 z-30
                 bg-blue-800 text-white
                 px-3 py-6
                 rounded-r-2xl
                 text-xl font-bold
                 hover:bg-blue-600 hover:pl-4
                 transition-all duration-300">
       →
    </button>
    )}

    <AnimatePresence>
      {open && (
        <>
        {/*Overlay*/}
        <motion.div
        onClick={closeMenu}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"/>
        
        {/*Panel IOS */}
        <motion.div
        initial={{ x:"-100%", scale: 0.98}}
        animate={{ x: 0, scale: 1}}
        exit={{ x: "-100%", scale: 0.98}}
        transition={{type: "spring",
                     stiffness: 260,
                     damping: 28,}}
        className="fixed top-0 left-0 h-screen w-[78%] md:w-[32%] lg:w-[22%] bg-gradient-to-b from-blue-800 to-blue-700
                  text-white z-40 p-8 flex flex-col shadow-2xl">

        {/*Boton Cerrar*/}
        <button
        onClick={closeMenu}
        className="self-end text-2xl hover:rotate-90 transition-transform duration-300">
           ✕
        </button>

        <motion.h3
          className="text-xs text-white font-semibold uppercase tracking-widest mb-3 text-center mt-6">
          Balsas x Shining 3D
          </motion.h3>

        {/*Nav*/}
        <nav className="flex flex-col gap-3 text-[17px] font-semibold mt-10">
            {links.map((item) => {
              const isActive = active === item.id;

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    group relative overflow-hidden
                    px-5 py-3.5 rounded-2xl
                    transition-all duration-300
                    backdrop-blur-xl
                    border
                    ${
                      isActive
                        ? "bg-white/20 border-white/30 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                        : "bg-white/5 border-white/10 text-white/90 hover:bg-white/10 hover:border-white/20"
                    }
                  `}
                >
                  {/* 🌊 Fondo dinámico tipo Apple */}
                  <motion.span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ opacity: isActive ? 0.25 : 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.35 }}
                    style={{
                      background:
                        "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.35), transparent 60%)",
                    }}
                  />

                  {/* 🔵 Indicador fluido */}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute left-1 top-1 bottom-1 w-1.5 bg-blue-300 rounded-full"
                    />
                  )}

                  {/* ✨ Contenido */}
                  <span className="relative flex items-center justify-between">
                    {/* Texto */}
                    <span className="tracking-tight">{item.label}</span>

                    {/* Flecha premium */}
                    <motion.span
                      className="opacity-60 group-hover:opacity-100"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      →
                    </motion.span>
                  </span>

                  {/* 💡 Brillo inferior sutil */}
                  <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40" />
                </motion.a>
              );
            })}
          </nav>
          {/*Logos Balsas-Shining*/}
          <motion.div
          className="mt-auto pt-10 flex items-center justify-center gap-6 opacity-90">
            <img
            src="/Logos/BalsasTrans.png"
            alt="Balsas"
            className="h-15 w-auto"
            />
            <img
            src="/Logos/Shining3d.png"
            alt="Shining"
            className="h-7 w-auto"
            />
          </motion.div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  ) 
}
