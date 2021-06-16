import { CartContext } from '../../context/CartProvider'
import CartIcon from './Cart.png'
import {IoCartOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const CartWidget = () => {
    const cart = useContext(CartContext)

    if(cart && cart.cartItems.length > 0){
        let amount = 0
        cart.cartItems.map(item => {
            amount += item.quantity
        })
        
        return ( 
            <> 
                <span style={{position:'absolute',zIndex:1, color:'black', fontWeight:'bold', top:25,right:15, height:25,width:25, backgroundColor:'lightgrey', textAlign:'center', borderRadius:20}}>{amount}</span>
                <Link to={'/cart'}>
                    <IoCartOutline color={'black'} size={30}></IoCartOutline>
                </Link>
            </>
         );
    }else{
        return(
            null
        )
    }
}
 
export default CartWidget;