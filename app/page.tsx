import { div } from "framer-motion/client";
import Image from "next/image";
import Hero from "@/components/sections/Hero"
import Beneficios from "@/components/sections/Beneficios";
import Emocional from "@/components/sections/Emocional";
import Capacitacion from "@/components/sections/Capacitacion";
import Usoreal from "@/components/sections/Usoreal";
import MenuLateral from "@/components/layout/Menulateral";

export default function Home() {
  return (
    <main>
      {/* Seccion Principal*/}
            <Hero/>
            {/*Seccion Beneficios*/}
                  <Beneficios/>
                  {/*Seccion Uso real (Casos Clinicos)*/}
                      <Usoreal/>
                      {/*Seccion Capacitacion */}
                            <Capacitacion/>
                          {/*Seccion Emocional*/}
                                <Emocional/>
                                {/*Menu lateral*/}
                                    <MenuLateral/>
    </main>
  );
}
