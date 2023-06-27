import Image from "next/image";
import { motion } from "framer-motion";

import imagem1 from "@images/salmaozinho.jpeg";
import imagem2 from "@images/sushi-com-graozinho.jpeg";
import imagem3 from "@images/lamen.jpeg";

export function PhotoSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div>
          <div className="xl:relative">
            <div className="flex flex-col justify-between w-full gap-4 md:px-0 md:justify-center md:items-center xl:flex-row xl:justify-between xl:z-index-50 xl:absolute">
              <Image
                src={imagem1}
                width={460}
                alt="salmao"
                className="lg:mr-1"
              />
              <Image
                src={imagem2}
                width={460}
                alt="sushi-com-graozinho"
                className="xl:mt-36"
              />
              <Image src={imagem3} width={460} alt="lamen" />
            </div>
          </div>
          <div className="h-72 hidden lg:block"></div>
          <div className="h-33 hidden bg-black xl:block"></div>
        </div>
      </motion.div>
    </section>
  );
}
