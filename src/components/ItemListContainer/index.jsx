/*import ItemCount  from '../ItemCount';*/
import Title from '../Title';
import React,{useState,useEffect} from "react";
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

const films = [
    {id: 1, image: "https://lumiere-a.akamaihd.net/v1/images/56015l02_bigsal_argentina_intpayoff_4x5_b6776139.jpeg", title: "Thor"},
    {id: 2, image: "https://cdn.forbes.com.mx/2021/09/Jumanji-hbo-max-640x360.jpg", title: "Jumanji"},
    {id: 3, image: "https://i.blogs.es/f9a58d/aquaman-poster-comic-con-2018/450_1000.jpg", title: "Aquaman"},
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(films);
            }, 2000);
        });
        getData.then(res => setData(res));

    },[])
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity}`)
    };
    return (
        <>
        <Title greeting={texto}/>
        <ItemCount initial = {1} stock={5} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer; 