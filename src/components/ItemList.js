import React, { useEffect, useState } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import Item from './Item'
import productsMock from '../mock/productosMock'
import { useParams } from 'react-router'



const ItemList = () => {

    const { id } = useParams();
    const [ products, setProducts ] = useState([])

    useEffect(()=>{
        console.log(id)
        const promise = new Promise((res, rej) => {
            setProducts([])
            setTimeout(()=>{
                res(true)
            },2000)
        })

        promise.then(()=>{
            
            if(id){
                let prod = []
                productsMock.map(producto =>{
                    if(id == producto.category){
                        prod.push(producto)
                    }
                })
                setProducts(prod)
            }else{
                setProducts(productsMock)
            }
        })

    },[id])

    if(products.length == 0){
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