import React, {useContext} from 'react'

import { CartContext } from '../context/CartProvider';
import { Container } from 'react-bootstrap';

const Cart = () => {
    const cart = useContext(CartContext)

    return ( 
        <Container>
            {cart && <h3>Se han registrado items en el carrito.</h3>}
        </Container>
     );
}
 
export default Cart;