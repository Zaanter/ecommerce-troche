import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import React, {useContext, useEffect, useState} from 'react'

import { CartContext } from '../context/CartProvider'
import ItemCount from './ItemCount'
import zapato from '../assets/images/zapato.jpeg'

const ItemDetail = ({id,nombre, stock, precio, descripcion, url}) => {
    
    const cartContext = useContext(CartContext)
    const [cantidad , setCantidad ] = useState('')
    const [added, setAdded] = useState(false)

    const onAdd = (cantidad) =>{
        setCantidad(cantidad)
    }

    const itemToCart = () => {
        const item = {
            id,
            nombre,
            precio,
            descripcion,
            url,
            stock
        }

        cartContext.addItem(item,cantidad)
        setAdded(true)
    }


    
    if(added){
        return(
            <Redirect to='/cart' />
        )
    }else{
        return ( 
    
            <>  
                <Row style={{width:'90%'}}>
                    <Col lg={12} >
                        <h1 style={{textAlign:'center', padding:20}}>{nombre}</h1>
                        <Card style={{padding:30}}>
                            <Card.Img src={url} style={{width:'70%',marginLeft:'15%', height:350}}>
                            
                            </Card.Img>
                            <Card.Title>
                             $ {precio}
                            </Card.Title>
                            <Card.Subtitle>
                                {descripcion}
                            </Card.Subtitle>
                            {
                                cantidad == '' ?
                                stock > 0 ?
                                    <div style={{justifyContent:'center', display:'flex'}}>
                                        <ItemCount onAdd={(cant)=> onAdd(cant)} stock={stock} initial={1}></ItemCount>
                                    </div>
                                    :
                                    <div style={{justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
                                        <h5>Este producto no tiene más stock.</h5>
                                        <Button><Link to='/' style={{color:'white', textDecoration:'none'}}>Volver</Link></Button>
                                    </div>
                                :
                                <div style={{margin:50, display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                                    <h5>Has seleccionado: {cantidad} productos.</h5>
                                    <Button onClick={() => itemToCart()}>Terminar mi compra</Button>
                                </div>
                            }
                            {
    
                            }
                        </Card>
                    </Col>
                </Row>
            </>
         );
    }
}
 
export default ItemDetail;