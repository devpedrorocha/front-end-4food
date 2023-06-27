"use client";
import { useAuth } from "hooks/useAuth";
import { useEffect, useRef } from "react";

import {
  BsPersonFill,
  BsFillTelephoneFill,
  BsFillLockFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { api } from "src/services/api";

export default function Perfil() {
  const { user, userIsLogged } = useAuth();

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const foneInputRef = useRef<HTMLInputElement>(null);
  const senhaInputRef = useRef<HTMLInputElement>(null);

  async function handleEditProfile(event: any) {
    event.preventDefault();

    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const phone = foneInputRef.current?.value;
    const password = senhaInputRef.current?.value;

    const updateUserObject = {
      name,
      email,
      phone,
      password,
    };
    const token = localStorage.getItem("jwtToken");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await api.put(
      `/user/${user.id}`,
      JSON.stringify(updateUserObject)
    );
    console.log(res);
  }

  useEffect(() => {
    userIsLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="flex items-center h-screen flex-col bg-[url('../../public/images/background-perfil.jpg')]
    bg-cover bg-top relative mt-5"
    >
      <div className="bg-white bg-opacity-80 flex items-center flex-col p-5 absolute top-10 w-4/5 lg:w-5/12">
        <div className="flex justify-center items-center mb-3">
          <h1 className="lg:text-4xl text-lg uppercase lg:p-5 p-2">
            Altere seus Dados
          </h1>
          <div className="hidden border border-black border-solid rounded-full p-3 md:flex">
            <BsPersonFill className="text-base" />
          </div>
        </div>
        <form onSubmit={handleEditProfile}>
          <div className="pb-4 flex flex-col">
            <div className="flex items-center gap-1">
              <BsPersonFill />
              <label
                htmlFor="input_nome"
                className="uppercase text-sm lg:text-base"
              >
                Nome
              </label>
            </div>
            <input
              id="input_nome"
              type="text"
              ref={nameInputRef}
              defaultValue={user?.name}
              className="border border-black border-solid py-3 px-2 w-4/5 md:w-60 lg:w-80"
            />
          </div>
          <div className="pb-4 flex flex-col">
            <div className="flex items-center gap-1">
              <MdEmail />
              <label
                htmlFor="input_email"
                className="uppercase text-sm lg:text-base"
              >
                Email
              </label>
            </div>
            <input
              id="input_email"
              type="text"
              ref={emailInputRef}
              defaultValue={user?.email}
              className="border border-black border-solid py-3 px-2 w-4/5 md:w-60 lg:w-80"
            />
          </div>
          <div className="pb-4 flex flex-col">
            <div className="flex items-center gap-1">
              <BsFillTelephoneFill />
              <label
                htmlFor="input_fone"
                className="uppercase text-sm lg:text-base"
              >
                Telefone
              </label>
            </div>
            <input
              id="input_fone"
              type="tel"
              ref={foneInputRef}
              defaultValue={user?.phone}
              className="border border-black border-solid py-3 px-2 w-4/5 md:w-60 lg:w-80"
            />
          </div>
          <div className="pb-4 flex flex-col">
            <div className="flex items-center gap-1">
              <BsFillLockFill />
              <label
                htmlFor="input_senha"
                className="uppercase text-sm lg:text-base"
              >
                Senha
              </label>
            </div>
            <input
              id="input_senha"
              type="password"
              ref={senhaInputRef}
              className="border border-black border-solid py-3 px-2 w-4/5 md:w-60 lg:w-80"
            />
          </div>
          <button
            className="w-4/5 md:w-60 lg:w-80 py-3 px-2 bg-black text-white"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    </section>
  );
}
