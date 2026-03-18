import { div } from "framer-motion/client";
import Image from "next/image";
import Hero from "@/components/sections/Hero"
import Beneficios from "@/components/sections/Beneficios";
import Capacitacion from "@/components/sections/Capacitacion";
import Usoreal from "@/components/sections/Usoreal";
import MenuLateral from "@/components/layout/Menulateral";

import Emocional from "@/components/sections/Emocional";

export default function Home() {
  return (
    <main>
      {/* Seccion Principal*/}
            <Hero/>
            {/*Seccion Beneficios*/}
                  <Beneficios/>
                  {/*Seccion de pagina de libro*/}
                    <Emocional/>
                      {/*Seccion Capacitacion */}
                            <Capacitacion/>
                                {/*Menu lateral*/}
                                    <MenuLateral/>
                                     
    </main>
  );
}
