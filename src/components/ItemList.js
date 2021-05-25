import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Item from './Item'

const productsMock = [
    {
        'id':0,
        'title':'Zapatillas',
        'price': 1999,
        'pictureUrl':'http://staywithme.com.ar/fotos/a29.jpg'
    },
    {
        'id':1,
        'title':'Zapatos',
        'price':2499,
        'pictureUrl':'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/215/311/products/img-20200803-wa01451-bd180f9997879370d116052034020616-480-0.jpg'
    },
    {
        'id':2,
        'title':'Ojotas',
        'price':899,
        'pictureUrl':'https://marcantoniodep.com.ar/uploads/productos/1602772338_NDEzNTEwMjI3MTk=.jpg'
    },
    {
        'id':3,
        'title':'Zapatillas',
        'price': 1999,
        'pictureUrl':'http://staywithme.com.ar/fotos/a29.jpg'
    },
    {
        'id':4,
        'title':'Zapatos',
        'price':2499,
        'pictureUrl':'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/215/311/products/img-20200803-wa01451-bd180f9997879370d116052034020616-480-0.jpg'
    },
    {
        'id':5,
        'title':'Ojotas',
        'price':899,
        'pictureUrl':'https://marcantoniodep.com.ar/uploads/productos/1602772338_NDEzNTEwMjI3MTk=.jpg'
    },
    {
        'id':6,
        'title':'Zapatillas',
        'price': 1999,
        'pictureUrl':'http://staywithme.com.ar/fotos/a29.jpg'
    },
    {
        'id':7,
        'title':'Zapatos',
        'price':2499,
        'pictureUrl':'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/215/311/products/img-20200803-wa01451-bd180f9997879370d116052034020616-480-0.jpg'
    },
    {
        'id':8,
        'title':'Ojotas',
        'price':899,
        'pictureUrl':'https://marcantoniodep.com.ar/uploads/productos/1602772338_NDEzNTEwMjI3MTk=.jpg'
    }

]


const ItemList = () => {

    const [ products, setProducts ] = useState([])

    useEffect(()=>{
        const promise = new Promise((res, rej) => {
            setTimeout(()=>{
                res(true)
            },2000)
        })

        promise.then(()=>{
            setProducts(productsMock)
        })

    },[])

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
 
export default ItemList;