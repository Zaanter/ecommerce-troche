import { Container, Row, Spinner } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

import Item from './Item'
import { getFirestore } from '../firebase'
import productsMock from '../mock/productosMock'
import { useParams } from 'react-router'

const ItemList = () => {

    const { id } = useParams();
    const [ products, setProducts ] = useState([])
    const [ loading , setLoading ] = useState(false)

    useEffect(()=>{


        const db = getFirestore()
        if(id){
            
            const itemCollection = db.collection('items').where('category', '==' ,id)
            
            itemCollection.get().then((snap) => {
                if(snap.size === 0){
                    console.log('No hay valores con esa categoría.')
                }
                setProducts(
                    snap.docs.map((doc) => {
                        console.log(doc)
                        return {id:doc.id, ...doc.data() }
                    })
                )
            }).catch((error) => {
                console.log('Error buscando items', error)
            }).finally(()=>{
                setLoading(true)
            })
            
        }else{

            const itemCollection = db.collection('items')

            itemCollection.get().then((snap) => {
                if(snap.size === 0){
                    console.log('No hay valores')
                }
                setProducts(
                    snap.docs.map((doc) => {
                        console.log(doc)
                        return {id:doc.id, ...doc.data() }
                    })
                )
            }).catch((error) => {
                console.log('Error buscando items', error)
            }).finally(()=>{
                setLoading(true)
            })
        }

    },[id])

    if(products.length == 0 || !loading){
        return(
            <Container style={{ height:'85vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Spinner animation="border" variant="dark" style={{width:50, height:50}} />
            </Container>
        )
    }else{
        return ( 
            <Row>
                {
                    products && products.map(product => {
                        return (
                            <Item key={product.id} id={product.id} title={product.title} price={product.price} pictureUrl={product.pictureUrl}></Item>
                        )
                    })
                }
            </Row>
         );
    }
}
 
export default ItemList;