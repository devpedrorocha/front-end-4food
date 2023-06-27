import Image from "next/image"
import entregador from '../../../public/deliveryman.svg'
import { MdLocationOn, MdAccessTimeFilled } from 'react-icons/md'
import { BsCurrencyDollar } from 'react-icons/bs'


export default function PedidoConfirmado () {
    return (
        <section className="flex justify-center items-center gap-20 mt-28">
            <div>
                <div className="py-8">
                    <h1 className="text-2xl font-bold mb-2">Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que seu pedido chegará até você</p>
                </div>
                <div className="w-full p-12 border border-black border-solid rounded-tl-3xl rounded-br-3xl">
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center gap-3">
                            <div>
                                <MdLocationOn className="text-2xl"/>
                            </div>
                            <div>
                                <p>Entregue em Rua Felipe Domingues Petry, 600</p>
                                <p>Praia Comprida-SC</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <div>
                                <MdAccessTimeFilled className="text-xl"/>
                            </div>
                            <div>
                                <p>Previsão de Entrega</p>
                                <p>20 - 30 Minutos</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <div>
                                <BsCurrencyDollar className="text-2xl"/>
                            </div>
                            <div>
                                <p>Pagamento na entrega</p>
                                <p>Dinheiro</p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
                <Image src={entregador} alt="Entregador"></Image>
            <div>
            </div>
        </section>
    )
}