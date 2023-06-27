import Image from "next/image";

import { motion } from "framer-motion";

import HomemSushi from "@images/homem-fazendo-sushi.jpg";
import BandejaSushi from "@images/bandeja-sushi.jpg";
import PratoComSushi from "@images/prato-com-sushi.jpg";

export function PhilosophySection() {
  return (
    <section className="w-full mt-40 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div>
          <div className="flex flex-col w-full gap-4 md:justify-center md:items-center xl:px-0 xl:flex-row ">
            <div className="order-last xl:order-none">
              <Image src={HomemSushi} width={470} alt="mapa" />
            </div>
            <div className="flex flex-col gap-4 order-last xl:order-none xl:pt-24 ">
              <Image src={PratoComSushi} width={350} alt="mapa" />
              <Image src={BandejaSushi} width={350} alt="mapa" />
            </div>
            <div className="w-full xl:w-96 pb-16 xl:py-28 flex flex-col justify-start xl:mx-20 ">
              <p className="text-2xl text-black mb-6">
              私達の価値！
              </p>
              <h2 className="font-bold text-3xl mb-6">NOSSOS VALORES</h2>
              <p className="text-lg text-gray-500 mb-6">
              Tradição, qualidade e hospitalidade: descubra a verdadeira essência da culinária japonesa em nosso restaurante.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
