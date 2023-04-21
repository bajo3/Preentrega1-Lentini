import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: 'Felipe',
      email: 'Felipelentini98@hotmail.com',
      phone: '2494621182',
      adress: 'Carlos alfonso 1978'
    },
    items: cart.map(product => ({id: product.id,Title: product.title, price: product.price, quantity: product.quantity})) ,
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))

  };

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <a href='/'>Hacer compras</a>
      </>
    );
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        totales: {totalPrice()}
      </p>
      <button className='btn-buy' onClick={handleClick}>Hacer compra</button>
    </>
  );
};

export default Cart;
