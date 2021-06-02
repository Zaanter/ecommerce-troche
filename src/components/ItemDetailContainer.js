import React, {useState, useEffect} from 'react'
import { Container, Spinner } from "react-bootstrap";
import ItemDetail from './ItemDetail';
import productsMock from '../mock/productosMock'
import { useParams } from 'react-router';

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState('')

    useEffect(()=>{
        const getItems = new Promise((res, rej) => {
            setTimeout(()=>{
                res(true)
            },2000)
        })

        getItems.then(()=>{
            productsMock.map(producto => {
                if(id == producto.id){
                    setProducto({
                        'title': producto.title,
                        'category': producto.category,
                        'price': producto.price,
                        'description': producto.description,
                        'url': producto.pictureUrl
                    })
                }
            })
        })

    },[id])


    if(producto == ''){
        return(
            <Container style={{ height:'90vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Spinner animation="border" variant="dark" style={{width:50, height:50}} />
            </Container>
        )
    }else{
        return ( 
            <Container style={{ height:'90vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                {
                    producto && <ItemDetail nombre={producto.title} precio={producto.price} descripcion={producto.description} url={producto.url}></ItemDetail> 
                }
            </Container>
         );
    }
}
 
export default ItemDetailContainer;