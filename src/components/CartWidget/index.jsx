import React from "react";
import { useCartContext } from "../../context/CartContext"

/**
 * Componente que muestra un ícono de carrito de compras.
 */
export const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <>
        <i className="bi bi-cart3"></i>
        <span>{totalProducts() || ''}</span>
        </>
    );
}

export default CartWidget;