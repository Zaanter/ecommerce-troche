import { Container, Spinner } from "react-bootstrap";
import React, {useEffect, useState} from 'react'

import ItemDetail from './ItemDetail';
import { getFirestore } from "../firebase";
import { useParams } from 'react-router';

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState('')
    const [loading, setLoading ] = useState(false)
    
    useEffect(()=>{
        
        const db = getFirestore()
        const itemCollection = db.collection('items')
        const item = itemCollection.doc(id)
        item.get().then((item) => {
            if(!item.exists){
                console.log('El item no existe.')
            }
            setProducto({ id:item.id , ...item.data() })
        }).catch((error)=>{
            console.log('Hubo un error al cargar el producto.', error)
        }).finally(()=>{
            setLoading(true)
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
                    producto && <ItemDetail stock={producto.stock} id={producto.id} nombre={producto.title} precio={producto.price} descripcion={producto.description} url={producto.pictureUrl}></ItemDetail> 
                }
            </Container>
         );
    }
}
 
export default ItemDetailContainer;