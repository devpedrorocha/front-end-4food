"use client";
import { ReactNode, createContext, useState } from "react";
import { ProductProps } from "src/app/components/ItemMenu";
import { produce } from "immer";

interface CartItem extends ProductProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  changeProductQuantity: (product: CartItem, type: boolean) => void;
  addProductToCart: (product: CartItem) => void;
}

interface CardContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CardContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function changeProductQuantity(product: CartItem, type: boolean) {
    const updatedProduct = produce(product, (draft) => {
      if (type) {
        draft.quantity += 1;
      } else {
        if (draft.quantity > 0) {
          draft.quantity -= 1;
        }
      }
    });
    const index = cartItems.findIndex((cartItem) => cartItem.id === product.id);
    const newCart = [
      ...cartItems.slice(0, index),
      updatedProduct,
      ...cartItems.slice(index + 1),
    ];
    setCartItems(newCart);
  }

  function addProductToCart(product: CartItem) {
    const productAlreadyExists = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    const newCart = produce(cartItems, (draft) => {
      if (productAlreadyExists < 0) {
        draft.push(product);
      } else {
        draft[productAlreadyExists].quantity += product.quantity;
      }
    });

    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, changeProductQuantity, addProductToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
