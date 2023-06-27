"use client";

import Image from "next/image";
import LocalizationMap from "@images/localization-map.png";
import { motion } from "framer-motion";

export function ComeAndVisitUs() {
  return (
    <section className="w-full mt-28 xl:mt-56">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="w-full flex flex-col items-center justify-center xl:relative">
          <div className="flex flex-col justify-center items-center bg-black xl:w-33 py-6 px-3 text-white xl:absolute xl:left-32 md:left-56 top-0">
            <p className="text-xl font-bold tracking-wider">RESERVA</p>
            <div className="w-full h-1 border-b border-solid pt-6 mb-8"></div>
            <p className="py-1 mb-8 text-xl font-bold tracking-widest">
              FUNCIONAMENTO
            </p>
            <p className="py-1 text-lg mb-6">Dias de Semana 9:20 - 22:00</p>
            <p className="py-1 text-lg mb-6">Sábados 10:00 - 22:00</p>
            <p className="py-1 text-lg">Domingos 11:00 - 22:00</p>
            <p className="py-16 w-64 font-bold text-center tracking-widest">
              <strong>RESERVE SUA MESA PARA ALMOÇO OU JANTAR</strong>
            </p>
            <button className="bg-white w-48 h-16 p-2 text-black font-medium">
              CONHEÇA
            </button>
          </div>
          <div className="p-4 md:mt-12 xl:pt-0 xl:w-37 xl:ml-96 ">
            <p className="text-2xl text-black mb-6">
              私達はあなたを待っている！
            </p>
            <h1 className="font-bold text-4xl mb-6">Venha e nos visite!</h1>
            <p className="text-lg text-gray-500 mb-6">
              Convidamos você a embarcar em uma jornada culinária inesquecível, explorando os segredos da cozinha japonesa em nosso restaurante.
            </p>
          </div>
        </div>
        <Image src={LocalizationMap} width={2000} alt="mapa" />
      </motion.div>
    </section>
  );
}
