"use client"
import { ReactNode, createContext, useState } from "react";
import { ProductProps } from "src/app/components/ItemMenu";
import { produce } from "immer";

interface CartItem extends ProductProps{
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addProductToCart: (product: CartItem) => void
}

interface CardContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider ({ children }: CardContextProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function addProductToCart(product: CartItem) {
        const productAlreadyExists = cartItems.findIndex( (cartItem) => cartItem.id === product.id)
        const newCart = produce(cartItems, (draft) => {
            if (productAlreadyExists < 0) {
                draft.push(product)
            } else {
                draft[productAlreadyExists].quantity += product.quantity
            }
        });

        setCartItems(newCart);
    }

    console.log(cartItems)

    return (
        <CartContext.Provider value={{ cartItems, addProductToCart }}>
            {children}
        </CartContext.Provider>
    )
}