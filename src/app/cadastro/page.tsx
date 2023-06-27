"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "hooks/useAuth";
import { useForm } from "react-hook-form";
import { LuAlertOctagon } from "react-icons/lu";

import * as Yup from "yup";

const schemaPedido = Yup.object().shape({
  name: Yup.string().required("Informe sua Nome."),
  email: Yup.string().required("Informe seu Email"),
  phone: Yup.string().required("Informe seu Telefone"),
  password: Yup.string().required("Infome uma Senha"),
});

export default function Cadastro() {
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaPedido),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  function handleSubmitData(data: any) {
    console.log("entrou no handleSubmitData");
    console.log(typeof signUp);
    signUp(data);
  }

  return (
    <section
      className="h-screen w-full flex justify-center items-center bg-[url('../../public/images/background-tela-login.jpg')]
      bg-cover bg-center relative mt-5 lg:mt-8"
    >
      <div
        className="flex flex-col justify-center items-center bg-white bg-opacity-95
         text-black absolute rounded w-3/4 lg:p-4 lg:w-33 lg:h-auto"
      >
        <h1 className="text-2xl lg:text-3xl my-8 border-b border-black border-solid">
          Cadastre-se
        </h1>
        <form
          onSubmit={handleSubmit(handleSubmitData)}
          className="flex justify-center flex-col gap-5"
        >
          <div className="flex flex-col items-center lg:items-start mb-2 px-3 lg:px-0">
            <label htmlFor="nome" className="block text-base mb-2 lg:text-xl">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu Nome"
              {...register("name")}
              className="py-3 px-4 w-4/5 lg:w-72
                    bg-white text-black border border-black border-solid mb-2"
            />
            {errors.name ? (
              <p className="bg-red-600 text-white text-sm lg:text-md p-2 w-4/5 lg:w-72 rounded flex gap-2 items-center mb-2">
                <LuAlertOctagon size={20} />
                {errors.name?.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center lg:items-start mb-2 px-3 lg:px-0">
            <label htmlFor="email" className="block text-base mb-2 lg:text-xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Digite seu email"
              className="py-3 px-4 w-4/5 lg:w-72 mb-2
                    bg-white text-black border border-black border-solid"
            />
            {errors.email ? (
              <p className="bg-red-600 text-white text-sm lg:text-md p-2 rounded flex gap-2 items-center mb-2 w-4/5 lg:w-72">
                <LuAlertOctagon size={20} />
                {errors.email?.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center lg:items-start mb-2 px-3 lg:px-0">
            <label
              htmlFor="telefone"
              className="block text-base mb-2 lg:text-xl"
            >
              Telefone
            </label>
            <input
              id="telefone"
              {...register("phone")}
              type="tel"
              placeholder="(xx) xxxx-xxxx"
              className="py-3 px-4 w-4/5 lg:w-72 mb-2
                    bg-white text-black border border-black border-solid"
            />
            {errors.phone ? (
              <p className="bg-red-600 text-white text-sm lg:text-md p-2 rounded flex gap-2 items-center mb-2 w-4/5 lg:w-72">
                <LuAlertOctagon size={20} />
                {errors.phone?.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center lg:items-start mb-2 px-3 lg:px-0">
            <label htmlFor="senha" className="block text-base mb-2 lg:text-xl">
              Senha
            </label>
            <input
              id="senha"
              {...register("password")}
              type="password"
              placeholder="Digite uma senha"
              className="py-3 px-4 w-4/5 lg:w-72 mb-2
                    bg-white text-black border border-black border-solid"
            />
            {errors.password ? (
              <p className="bg-red-600 text-white text-sm lg:text-md p-2 rounded flex gap-2 items-center mb-2 w-4/5 lg:w-72">
                <LuAlertOctagon size={20} />
                {errors.password?.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col px-3 lg:px-0 items-center lg:items-start mb-5">
            <button className=" w-4/5 lg:w-72 py-3 bg-black text-white hover:opacity-80">
              {isSubmitting ? "Enviando..." : "Criar Conta"}
            </button>
            <p className="text-xs lg:text-sm">
              <a href="/login" className="border-b border-solid">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
