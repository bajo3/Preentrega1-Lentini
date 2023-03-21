import './item.css';
import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  const nombre = useContext(CartContext);
  console.log('Item:', nombre);
    return (
      <Link to={`/detalle/${info.id}`} className='film'>
        <h1>{info.title}</h1>
        <img src={info.image} alt="" srcset="" />
        <p>{info.resume}</p>
      </Link>
    );
};

export default Item;