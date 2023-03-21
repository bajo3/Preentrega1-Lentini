import Title from '../Title';
import React,{useState,useEffect} from "react";
import ItemList from '../ItemList';
import {useParams} from 'react-router-dom'

const films = [
    {id: 1, image: "https://lumiere-a.akamaihd.net/v1/images/56015l02_bigsal_argentina_intpayoff_4x5_b6776139.jpeg", category: 'films', title: "Thor"},
    {id: 2, image: "https://cdn.forbes.com.mx/2021/09/Jumanji-hbo-max-640x360.jpg", category: 'films',  title: "Jumanji"},
    {id: 3, image: "https://i.blogs.es/f9a58d/aquaman-poster-comic-con-2018/450_1000.jpg", category: 'films',  title: "Aquaman"},

    {id: 4, image: "https://www.lavanguardia.com/files/article_main_microformat/uploads/2021/08/07/610e81a61341b.jpeg", category: 'series',  title: "Elite"},
    {id: 5, image: "https://www.antena3.com/newa3flash/modulos_blancos/series/escaparate/hermanos/hermanos3.jpg", category: 'series', title: "Hacks"},
    {id: 6, image: "https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg", category: 'series', title: "Breaking Bad"},


];

export const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });
        if (categoriaId){
            getData.then(res => setData(res.filter(film => film.category === categoriaId)));
        }else{
            getData.then(res => setData(res));
        }
        
        
    },[categoriaId])

    return (
        <>
        <Title greeting={greeting}/>
       
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer; 