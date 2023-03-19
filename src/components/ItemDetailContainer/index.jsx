import React,{useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';

const film = {id: 1, image: "https://lumiere-a.akamaihd.net/v1/images/au_marvel_thor_movie_poster_f85e6382.jpeg?region=0,0,540,810", title: "Thora"}

const ItemDetailContainer = () => {
const [data,setData] = useState ({});

useEffect(() => {
  const getData = new Promise(resolve => {
    setTimeout(() => {
      resolve (film);
    }, 2000);
  });
    getData.then (res => setData(res));
}, []);

    return (
      <ItemDetail data = {data}/>
    );
};

export default ItemDetailContainer;