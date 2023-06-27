import Image from "next/image";
import ProductImage from "@images/sushiexemplo.jpg";
import { BsPlusLg } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { useCart } from "hooks/useCart";

type Props = {
  produto: any;
  isCombo?: boolean;
};

export function ProductCard({ produto }: Props) {
  return (
    <div className="bg-opacity-30 flex flex-col justify-center items-center py-2">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center px-2 lg:px-0">
        <div className="w-full flex justify-center lg:w-2/6">
          <Image src={ProductImage} width={256} alt="Imagem do produto" />
        </div>
        <div className="w-64 lg:w-full flex flex-col lg:flex-row justify-start lg:justify-between lg:gap-5 mt-1 pl-1 lg:mt-4">
          <h1 className="font-bold lg:text-sm text-md lg:max-w-[50px] lg:pl-3">{produto.name}</h1>
          <div className="flex items-center">
            <button type="button" onClick={() => console.log('clicar')}><BiMinus /></button>
            <p className="text-sm p-2">{produto.quantity}</p>
            <button type="button" onClick={() => console.log('clicar')}><BsPlusLg /></button>
          </div>
          <div className="pl-1">
            <p className="text-sm text-end font-bold lg:w-16">
              {produto.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
