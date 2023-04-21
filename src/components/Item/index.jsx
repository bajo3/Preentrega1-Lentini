import './item.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({info}) => {

    return (
      <div className="film-container">
        <Link to={`/detalle/${info.id}`} className='film'>
          <div className='film__content'>
            <h1>{info.title}</h1>
            <img src={info.image} alt="" srcSet="" width="200" height="300" />
            <p>{info.resume}</p>
          </div>
        </Link>
      </div>
    );
};

export default Item;
