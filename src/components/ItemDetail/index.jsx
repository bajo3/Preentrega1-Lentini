import './itemDetail.css';

import React, {useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCount  from '../ItemCount';
import { Link } from 'react-router-dom';



export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    };
    return (
        <div className="container">
            <div className="detail">
                <img src={data.image} alt="" className="detail__image" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.resume}</p>
                    {
                        goToCart
                        ? <Link to='/cart'>Terminar compra</Link>:
                        <ItemCount initial = {1} stock={5} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;