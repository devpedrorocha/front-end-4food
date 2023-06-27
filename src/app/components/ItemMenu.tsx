import { useCart } from "hooks/useCart";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare, AiOutlineShoppingCart } from 'react-icons/ai'

export interface ProductProps {
    image: StaticImageData;
    name: string;
    price: number;
    id: number;
}

import Coquetel from "../../../public/images/coquetel.jpg";
import Ramen from "../../../public/images/ramen.jpg";
import Nigiri from "../../../public/images/nigiri.jpg";
import Suco from "../../../public/images/suco.jpg";
import Sashimi from "@images/sashimi.jpg"
import SushiDeSalmao from "@images/sushi salmao.jpg"
import ComboSushi from "@images/combo 2.png"
import SushiComCreemeCheese from '@images/sushiexemplo.jpg'
import Temaki from '@images/temaki.jpg'
import Hot from '@images/sushi a milanesa.jpg'

export function ItemMenu(props: ProductProps) {

    const [quantity, setQuantity] = useState(1)


    function selectImagePerName(name:string){
        switch (name) {
            case 'Hot':
              return Hot
            case 'Temaki':
              return Temaki
            case 'Ramen':
              return Ramen
            case 'Coquetel':
              return Coquetel
            case 'Suco':
              return Suco
            case 'Nigiri':
              return Nigiri
            case 'Combo Sushi':
              return ComboSushi
            case 'Sushi de Salmão':
              return SushiDeSalmao
            case 'Sashimi':
              return Sashimi
            default:
                return SushiComCreemeCheese
        }
    }


    function handleIncrease () {
        setQuantity(state => state + 1)
    }

    function handleDecrease () {
        setQuantity(state => state - 1)
    }

    const { addProductToCart } = useCart()

    function handleAddToCart () {
        const productToAdd = {
            ...props,
            quantity
        }
        addProductToCart(productToAdd)
    }

    return (
        <div className="max-w-xs lg:hover:-translate-y-2 lg:duration-300">
            <div className="relative overflow-hidden">
                <p className="text-black absolute bottom-5 right-5 py-1 px-3 bg-white font-bold z-10">R$ {props.price}</p>
                <Image src={selectImagePerName(props.name)} alt={props.name} className="lg:hover:scale-105 lg:duration-200"/>
            </div>
            <div className="divide-y-3 pt-1">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold uppercase py-3">{props.name}</h1>
                    <div className="flex items-center border border-black border-solid p-2 rounded">
                        <button className="hover:opacity-70" disabled={quantity === 1} onClick={handleDecrease}><AiOutlineMinusSquare size={26}/></button>
                        <span className="w-8 h-8 rounded bg-black text-white text-center p-1">{quantity}</span>
                        <button className="hover:opacity-70" onClick={handleIncrease}><AiOutlinePlusSquare size={26}/></button>
                        <button onClick={handleAddToCart} className="hover:scale-105 hover:text-red-600 duration-200"><AiOutlineShoppingCart size={26}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  