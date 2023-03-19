import React from 'react';
import './itemDetail.css';

const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img src={data.image} alt="" className="detail__image" />
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;