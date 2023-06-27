import { CartContext } from "context/CartContext";
import { useContext } from "react";

export function useCart() {
    const context = useContext(CartContext)
    return context
}

/* const { carItems } = useCart(); */