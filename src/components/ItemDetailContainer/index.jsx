import React,{useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom'


const films = [
  {id: 1, image: "https://lumiere-a.akamaihd.net/v1/images/56015l02_bigsal_argentina_intpayoff_4x5_b6776139.jpeg", category: 'films', resume:"rem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", title: "Thor"},
  {id: 2, image: "https://cdn.forbes.com.mx/2021/09/Jumanji-hbo-max-640x360.jpg", category: 'films', resume:"rem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",  title: "Jumanji"},
  {id: 3, image: "https://i.blogs.es/f9a58d/aquaman-poster-comic-con-2018/450_1000.jpg", category: 'films', resume:"rem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",  title: "Aquaman"},

  {id: 4, image: "https://www.lavanguardia.com/files/article_main_microformat/uploads/2021/08/07/610e81a61341b.jpeg", category: 'series', resume:"rem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",  title: "Elite"},
  {id: 5, image: "https://www.antena3.com/newa3flash/modulos_blancos/series/escaparate/hermanos/hermanos3.jpg", category: 'series', resume:"rem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", title: "Hacks"},
  {id: 6, image: "https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg", category: 'series', resume:"rem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", title: "Breaking Bad"},


];

export const ItemDetailContainer = () => {
const [data,setData] = useState ({});
const {detalleId} = useParams();

useEffect(() => {
  const getData = new Promise(resolve => {
    setTimeout(() => {
      resolve (films);
    }, 2000);
  });
    getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
}, [detalleId]);

    return (
      <ItemDetail data = {data}/>
    );
};

export default ItemDetailContainer;