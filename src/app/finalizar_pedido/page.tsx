"use client";

import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import * as RadioGroup from "@radix-ui/react-radio-group";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ProductCard } from "../components/ProductCard";

import { LuAlertOctagon } from "react-icons/lu";
import { useCart } from "hooks/useCart";
import { useRouter } from "next/navigation";

const schemaPedido = Yup.object().shape({
  rua: Yup.string().required("Informe sua Rua"),
  bairro: Yup.string().required("Informe seu Bairro"),
  numero: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("Informe seu Número"),
  metodo_pagamento: Yup.string().required("Selecione o método de pagamento"),
});

export default function IntroductionSection() {
  const { cartItems } = useCart();

  const route = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schemaPedido),
    defaultValues: {
      bairro: "",
      metodo_pagamento: "",
      rua: "",
    },
  });
  function checkCEP(e: any) {
    const cep = e.target.value.replace(/\D/g, "");
  
  if (cep.length === 0) {
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      setValue("rua", data.logradouro);
      setValue("bairro", data.bairro);
    });
  }

  function handleSubmitData(data: any) {
    console.log("Vamos pedir um sushizin?", data);
    route.push('/pedido-confirmado')
  }

  return (
    <main className="w-full flex items-center py-8 justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <form
          onSubmit={handleSubmit(handleSubmitData)}
          className="flex flex-col items-center lg:items-start justify-center w-full lg:flex-row lg:justify-center px-2"
        >
          <div>
            <p className="font-bold text-lg">Complete seu pedido</p>
            <div className="bg-gray-200 p-4 rounded-tr-md rounded-bl-md">
              <h3 className="text-lg">Endereço de entrega</h3>
              <p className="text-sm py-2">
                Informe o endereço onde deseja receber seu pedido
              </p>
              <div className="flex flex-col gap-2">
                <input
                  className="rounded p-2 w-full mb-2"
                  type="text"
                  onBlur={checkCEP}
                  placeholder="CEP"
                />
                <input
                  className="rounded p-2 mb-2 w-full"
                  type="text"
                  placeholder="Rua"
                  {...register("rua")}
                />
                {errors.rua && (
                  <p className="bg-red-600 text-white p-2 rounded flex gap-2 items-center mb-2">
                    <LuAlertOctagon size={20} />
                    {errors.rua?.message}
                  </p>
                )}
                <input
                  className="rounded p-2 mb-2 w-full"
                  placeholder="Número"
                  {...register("numero")}
                />
                {errors.numero && (
                  <p className="bg-red-600 text-white p-2 rounded flex gap-2 items-center mb-2">
                    <LuAlertOctagon size={20} />
                    {errors.numero?.message}
                  </p>
                )}
                <input
                  className="rounded p-2 w-full mb-2"
                  type="text"
                  name="complemento"
                  placeholder="Complemento"
                />
                <input
                  className="rounded p-2 w-full mb-2"
                  type="text"
                  placeholder="Bairro"
                  {...register("bairro")}
                />
                {errors.bairro && (
                  <p className="bg-red-600 text-white p-2 rounded flex items-center gap-2 mb-2">
                    <LuAlertOctagon size={20} />
                    {errors.bairro?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <div className="bg-gray-200 p-4 rounded-tr-md rounded">
                <h3 className="text-lg">$ Pagamento</h3>
                <p className="text-sm py-2">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar.
                </p>
                <div className="flex flex-col gap-2">
                  <Controller
                    control={control}
                    name="metodo_pagamento"
                    render={({ field: { onChange, value, ref } }) => (
                      <RadioGroup.Root
                        onValueChange={onChange}
                        value={value}
                        className="flex flex-col gap-4"
                        defaultValue="default"
                        aria-label="View density"
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <RadioGroup.Item
                            className="bg-white w-6 h-6 rounded-full shadow-md"
                            value="credito"
                          >
                            <RadioGroup.Indicator className="flex items-center justify-center relative  after:block after:w-3 after:h-3 after:rounded-3xl after:bg-violet-800" />
                          </RadioGroup.Item>
                          <label className="text-sm pl-4" htmlFor="r1">
                            CARTÃO DE CRÉDITO
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <RadioGroup.Item
                            className="bg-white w-6 h-6 rounded-full shadow-md"
                            value="debito"
                          >
                            <RadioGroup.Indicator className="flex items-center justify-center relative  after:block after:w-3 after:h-3 after:rounded-3xl after:bg-violet-800" />
                          </RadioGroup.Item>
                          <label className="text-sm pl-4" htmlFor="r2">
                            CARTÃO DE DÉBITO
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <RadioGroup.Item
                            className="bg-white w-6 h-6 rounded-full shadow-md"
                            value="dinheiro"
                          >
                            <RadioGroup.Indicator className="flex items-center justify-center relative  after:block after:w-3 after:h-3 after:rounded-3xl after:bg-violet-800" />
                          </RadioGroup.Item>
                          <label className="text-sm pl-4" htmlFor="r3">
                            DINHEIRO
                          </label>
                        </div>
                      </RadioGroup.Root>
                    )}
                  />
                </div>
              </div>
              {errors.metodo_pagamento ? (
                <p className="bg-red-600 text-white p-2 rounded-b-md flex gap-2 items-center mb-2">
                  <LuAlertOctagon size={20} />
                  {errors.metodo_pagamento?.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="w-full mt-16 flex flex-col px-2 lg:mt-0 lg:ml-6 lg:w-1/2">
            <p className="font-bold text-lg">Produtos selecionados</p>
            <div className="bg-gray-200 lg:p-3 text-black rounded-tr-md rounded-bl-md lg:w-full">
              <div className="flex flex-col items-center justify-center gap-2 mb-4">
                {cartItems.map((produto) => {
                  return <ProductCard key={produto.id} produto={produto} />;
                })}
              </div>
              <hr className="border-gray-300" />
              <div className="w-full p-4">
                <div className="text-end">
                  <h3 className="text-sm">Total dos itens - R$ 65,80</h3>
                  <p className="text-sm py-2">Entrega - R$ 10,99</p>
                  <p className="font-bold text-lg">Total - R$ 76,79</p>
                </div>
                <div className="flex justify-center items-center px-2">
                  <button
                    type="submit"
                    className="px-16 md:px-28 mt-2 text-white bg-black font-bold py-2 rounded hover:scale-95 
        hover:opacity-80 duration-300"
                  >
                    Confirmar pedido
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
