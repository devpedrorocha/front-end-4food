"use client";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "hooks/useAuth";
import { useForm } from "react-hook-form";

import * as Dialog from "@radix-ui/react-dialog";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./style.css";
import exemplo from "@images/sushiexemplo.jpg";
import { ItemMenu } from "../components/ItemMenu";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "src/services/api";

const schema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório!"),
  price: Yup.string().required("Campo obrigatório!"),
});

// import BarcaSushi  from "../../../public/images/barca sushi.jfif";
import Coquetel from "../../../public/images/coquetel.jpg";
import Lamen from "../../../public/images/lamen.jpeg";
import Nigiri from "../../../public/images/nigiri.jpg";
import Suco from "../../../public/images/suco.jpg";


export default function Cardapio() {
  const [activeItem, setActiveItem] = useState("principal");

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  const { user } = useAuth();

  const { handleSubmit, register } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      price: "",
    },
  });

  function getProdutosECombos() {}

  async function createProdutoECombo(data: any) {
    console.log(data);
    console.log(JSON.stringify(data));

    try {
      const res = await api.post("/product", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
    } catch (error) {
      alert(error);
    }
  }

  function deleteProdutoECombo() {}

  const [open, setOpen] = useState(false);

  const styleButtonActive = "text-black bg-white border border-black";

  const styleButtonNotActive = "text-white bg-black";

  // function selectImage(name) {}

  return (
    <section>
      <div className="text-center py-3 mb-3">
        <p className="text-gray-900 text-xl mb-3">メニュー</p>
        <h1 className="text-4xl font-bold">NOSSO MENU</h1>
      </div>

      <div className="flex justify-center flex-wrap gap-2 my-3">
        <button
          className={`px-14 py-4 hover:opacity-80 hover:-translate-y-1 
        duration-300 text-xl ${
          activeItem === "principal" ? styleButtonActive : styleButtonNotActive
        }`}
          onClick={() => handleClick("principal")}
        >
          PRINCIPAIS
        </button>
        <button
          className={`px-14 py-4 hover:opacity-80 hover:-translate-y-1 
        duration-300 text-xl ${
          activeItem === "sushi" ? styleButtonActive : styleButtonNotActive
        }`}
          onClick={() => handleClick("sushi")}
        >
          SUSHI
        </button>
        <button
          className={`px-14 py-4 hover:opacity-80 hover:-translate-y-1 
        duration-300 text-xl ${
          activeItem === "bebidas" ? styleButtonActive : styleButtonNotActive
        }`}
          onClick={() => handleClick("bebidas")}
        >
          BEBIDAS
        </button>
        <button
          className={`px-14 py-4 hover:opacity-80 hover:-translate-y-1 
        duration-300 text-xl ${
          activeItem === "combos" ? styleButtonActive : styleButtonNotActive
        }`}
          onClick={() => handleClick("combos")}
        >
          COMBOS
        </button>
        {user?.name == "admin" && (
          <Dialog.Root open={open}>
            <Dialog.Trigger asChild>
              <button
                className={`ml-12 px-6 hover:opacity-80 hover:-translate-y-1 
            duration-300 text-md font-bold text-white bg-black`}
                onClick={() => setOpen(true)}
              >
                CRIAR PRODUTO
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">
                  Cadastre um produto
                </Dialog.Title>
                <Dialog.Description className="DialogDescription">
                  Crie um novo produto para a loja.
                </Dialog.Description>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();

                    const form = event.target as HTMLFormElement;
                    const nameInput = form.querySelector(
                      "#name"
                    ) as HTMLInputElement;
                    const priceInput = form.querySelector(
                      "#price"
                    ) as HTMLInputElement;

                    const name = nameInput?.value;
                    const price = priceInput?.value;

                    createProdutoECombo({ name, price }).then(() =>
                      setOpen(false)
                    );
                  }}
                >
                  <div className="Fieldset">
                    <label className="Label" htmlFor="name">
                      Nome
                    </label>
                    <input className="Input" id="name" name="name" />
                  </div>
                  <div className="Fieldset">
                    <label className="Label" htmlFor="price">
                      Price
                    </label>
                    <input className="Input" id="price" name="price" />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      marginTop: 25,
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      className="bg-black text-white px-4 py-2"
                      type="submit"
                    >
                      Criar produto
                    </button>
                  </div>
                </form>
                <Dialog.Close asChild>
                  <button
                    className="IconButton"
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                  >
                    <AiOutlineCloseCircle />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </div>
      <div
        className="w-full py-8 px-8 lg:px-32 md:grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 items-center 
      justify-center lg:flex lg:flex-wrap"
      >
        <ItemMenu
          price={19.99}
          name="Sushi 1"
          image={exemplo}
          description="Sushizinho muito saboroso"
          id={1}
        />
        <ItemMenu
          price={19.99}
          name="Sushi 2"
          image={exemplo}
          description="Sushizinho muito saboroso"
          id={2}
        />
        <ItemMenu
          price={19.99}
          name="Sushi 3"
          image={exemplo}
          description="Sushizinho muito saboroso"
          id={3}
        />
        {/* <ItemMenu
          price={19.99}
          name="Sushi"
          image={exemplo}
          description="Sushizinho muito saboroso"
        />
        <ItemMenu
          price={19.99}
          name="Sushi"
          image={exemplo}
          description="Sushizinho muito saboroso"
        />
        <ItemMenu
          price={19.99}
          name="Sushi"
          image={exemplo}
          description="Sushizinho muito saboroso"
        />
        <ItemMenu
          price={19.99}
          name="Sushi"
          image={exemplo}
          description="Sushizinho muito saboroso"
        />
        <ItemMenu
          price={19.99}
          name="Sushi"
          image={exemplo}
          description="Sushizinho muito saboroso"
        />
        <ItemMenu
          price={19.99}
          name="Sushi"
          image={exemplo}
          description="Sushizinho muito saboroso"
        />
        <ItemMenu
          price={19.99}
          name="Sushi"
          image={exemplo}
          description="Sushizinho muito saboroso"
        /> */}
      </div>
    </section>
  );
}
