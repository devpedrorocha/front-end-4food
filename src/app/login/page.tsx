'use client'

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRouter } from "next/navigation";

import { useAuth } from "hooks/useAuth";

import { LuAlertOctagon } from "react-icons/lu";
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Campo obrigatório!")
    .email("O dado fornecido deve ser um email válido."),
  password: Yup.string().required("Campo obrigatório!"),
});

export default function Login() {

  const router = useRouter()

  const { signIn, setUser } = useAuth();


  const { register, handleSubmit, formState } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  
  const { errors, isSubmitting } = formState;

  const handleSubmitLogin =  async (data: any) => {
    try {
      const res = await signIn(data);

      if(res.status == 200){
        setUser(res.data.user);
        localStorage.setItem("jwtToken", res.data.token);
        localStorage.setItem("userProfile", JSON.stringify(res.data.user))
        router.push('/')
      }
      
    } catch (error: any) {
      alert(error);
    }
      
  };

  return (
    <section
      className="h-screen w-full flex justify-center items-center bg-[url('../../public/images/background-tela-login.jpg')]
      bg-cover bg-center relative"
    >
      <div
        className="flex justify-center items-center flex-col bg-white bg-opacity-95
         text-black absolute rounded max-w-md w-3/4 h-2/4 lg:p-4 lg:w-5/12 lg:h-3/4"
      >
        <h1 className="text-2xl lg:text-3xl p-2 lg:absolute lg:top-16 border-b border-black border-solid">
          Faça o Login
        </h1>
        <form onSubmit={handleSubmit(handleSubmitLogin)} className="mt-4">
          <div className="mb-2 px-3 lg:px-0">
            <label
              htmlFor="input_email"
              className="block text-base mb-2 lg:text-xl"
            >
              Email
            </label>
            <input
              id="input_email"
              type="text"
              placeholder="Digite seu email"
              className="py-3 px-4 w-4/5 lg:w-72 mb-2
              bg-black text-white"
              {...register("email")}
            />
            {errors.email && (
              <p className="bg-red-600 text-white text-sm lg:text-md p-2 rounded flex gap-2 items-center mb-2 w-4/5 lg:w-72">
                <LuAlertOctagon size={20} />
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="mb-2 px-3 lg:px-0">
            <label
              htmlFor="input_senha"
              className="block text-base mb-2 lg:text-xl"
            >
              Senha
            </label>
            <input
              id="input_senha"
              type="password"
              placeholder="Digite sua senha"
              className="py-3 px-4 w-4/5 lg:w-72 mb-2
              bg-black text-white active:border-none"
              {...register("password")}
            />
            {errors.password && (
              <p className="bg-red-600 text-white text-sm lg:text-md p-2 rounded flex gap-2 items-center mb-2 w-4/5 lg:w-72">
                <LuAlertOctagon size={20} />
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="px-3 lg:px-0">
            <button className=" w-4/5 h-12 lg:w-72 lg:h-12 bg-black text-white mt-4 hover:opacity-80"  >
               Entrar
            </button>
          </div>
          <p className="text-xs lg:text-sm mt-2">
            Não possui conta?{" "}
            <a href="/cadastro" className="border-b border-black border-solid">
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
