import { Button, Container } from 'react-bootstrap';
import React, {useContext} from 'react'

import { CartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = useContext(CartContext)
    return ( 
        <Container>
            {cart && <h3>Se han registrado {cart.cartItems.length} items en el carrito.</h3>}
            <Button><Link to='/' style={{color:'white', textDecoration:'none'}}>Regresar al home</Link></Button>
        </Container>
     );
}
 
export default Cart;