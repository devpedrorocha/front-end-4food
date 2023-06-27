"use client";

import { motion } from "framer-motion";
import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import { useState } from "react";

export function IntroductionSection() {

  const {user} = useAuth();


  function goOrder() {
    console.log("Vamos pedir um sushizin?");
  }

  return (
    <section className="text-center w-full mb-40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="py-4 mt-20 font-bold text-6xl tracking-wide ">
          O MELHOR SUSHI DA CIDADE
        </h1>
        <p className="text-gray-500 text-xl px-8 xl:px-96">
        Delicie-se com a autêntica culinária japonesa e mergulhe em uma experiência gastronômica única. 
        </p>
        {user.id ? <Link href="/cardapio" className="block px-3 py-4">
          <button
            className="px-24 my-2 bg-black
            text-white
            py-6
            mt-16
            hover:opacity-80
            hover:-translate-y-1
            duration-300
            text-xl"
          >
            Fazer Pedido
          </button>
        </Link> : <Link href="/login" className="block px-3 py-4">
          <button
            className="px-24 my-2 bg-black
            text-white
            py-6
            mt-26
            hover:opacity-80
            hover:-translate-y-1
            duration-300
            text-xl"
          >
            Fazer Pedido
          </button>
        </Link>}
        
      </motion.div>
    </section>
  );
}
