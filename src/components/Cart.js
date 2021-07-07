import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import React, {useContext, useEffect, useState} from 'react'

import { CartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartItems, setCartItems] = useState([])

    useEffect(()=> {
        let _totalPrice = 0
        cart.cartItems.map(item => {
            const cant = item.quantity
                _totalPrice += item.item.precio * cant
        })
        setTotalPrice(_totalPrice)
        setCartItems(cart.cartItems)
    },[cart])
    
    if(cart){
        if(cart.cartItems.length > 0){
            console.log(cart.cartItems)
            return ( 
                <Container style={{minHeight:'90vh'}}>
                    <Col>
                        <h3 style={{textAlign:'center', marginBottom:30}}>Carrito de compras</h3>
                        {
                            cartItems.map(item => {
                                return(
                                    <div key={item.item.id} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                        <div style={{height:90, width:'80%', justifyContent:'space-between',display:'flex', alignItems:'center', paddingLeft:20, paddingRight:20, borderBottomColor:'grey', borderBottom:'solid', paddingBottom:20, marginBottom:20}}>
                                            <img src={item.item.url} style={{height:90, width:90}}></img>
                                            <span style={{fontWeight:'600'}}>{item.item.nombre}</span>
                                            <span>cantidad: {item.quantity}</span>
                                            <span>$ {item.item.precio} c/u</span>
                                            <Button onClick={()=>cart.removeItem(item.item.id)}>X</Button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        <div  style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <div style={{height:90, width:'80%', justifyContent:'space-between',display:'flex', alignItems:'center', paddingLeft:20, paddingRight:20,  paddingBottom:20, marginBottom:20}}>
                                <div style={{height:90, width:90}}></div>
                                <span style={{fontWeight:'600'}}></span>
                                <span>Precio total: </span>
                                <span>$ {totalPrice} </span>
                            </div>
                        </div>
                    </Col>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Button style={{marginRight:30, backgroundColor:'white', borderColor:'blue-6'}}><Link style={{color:'blue-6', textDecoration:'none'}} to='/'>Seguir comprando</Link></Button>
                        <Button><Link style={{color:'white', textDecoration:'none'}} to='/buyer-form'>Finalizar compra</Link></Button>
                    </div>
                </Container>
             );
        }else{
            return(
                <Container style={{height:'90vh', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    {cart && <h3>No hay ningún item en el carrito, vuelva a buscar</h3>}
                    <Button><Link to='/' style={{color:'white', textDecoration:'none'}}>Regresar al home</Link></Button>
                </Container>
            )
        }
    }else{
        return(
            <Container style={{ height:'85vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Spinner animation="border" variant="dark" style={{width:50, height:50}} />
            </Container>
        )
    }
}
 
export default Cart;