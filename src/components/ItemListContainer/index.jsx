import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Title from '../Title';
import ItemList from '../ItemList';

export const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId));
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err));
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err));
        }
    }, [categoriaId]);

    return (
        <>
            <Title greeting={greeting} />
            <ItemList data={data} />
        </>
    );
};

export default ItemListContainer;
