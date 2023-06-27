import Image from "next/image";
import entregador from "../../../public/deliveryman.svg";
import { MdLocationOn, MdAccessTimeFilled } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

export default function PedidoConfirmado() {
  return (
    <section className="flex flex-col lg:flex-row-reverse justify-center items-center gap-20 lg:mt-28">
      <div className="flex flex-col justify-center items-center">
        <div className="py-8 text-center lg:text-start">
          <h1 className="text-lg lg:text-2xl font-bold mb-2">Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que seu pedido chegará até você</p>
        </div>
        <div className="lg:w-full w-4/5 p-12 border border-black border-solid rounded-tl-3xl rounded-br-3xl">
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-3">
              <div>
                <MdLocationOn className="lg:text-2xl text-xl" />
              </div>
              <div>
                <p className="lg:text-base text-sm">Rua de Exemplo</p>
                <p className="lg:text-base text-sm">Bairro Exemplo</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div>
                <MdAccessTimeFilled className="lg:text-xl text-lg" />
              </div>
              <div>
                <p className="lg:text-base text-sm">Previsão de Entrega</p>
                <p className="lg:text-base text-sm">20 - 30 Minutos</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div>
                <BsCurrencyDollar className="lg:text-2xl text-xl" />
              </div>
              <div>
                <p className="lg:text-base text-sm">Pagamento na entrega</p>
                <p className="lg:text-base text-sm">Dinheiro</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Image src={entregador} alt="Entregador"></Image>
      </div>
    </section>
  );
}
