import React, { useState } from 'react'

export const CartContext = React.createContext()

const CartProvider = ({ defaultValue = [], children }) => {
    const [ cartItems , setCartItems ] = useState(defaultValue)

    const addItem = (item,quantity) => {
        
        if(!isInCart(item.id)){
            setCartItems([...cartItems, { item, quantity }])
        }


    }

    const removeItem = (itemId) => {
        const items = cartItems.filter(cartItem => cartItem.item.id !== itemId)
        setCartItems(items)
    }

    const clear = () => {
        setCartItems([])
    }

    const isInCart = (id) => {
        var itemExist = false
        cartItems.map(cartItem => {
            if(id == cartItem.item.id){
                itemExist = true
            }
        })
        return itemExist;
    }


    return ( 
        <CartContext.Provider value={{cartItems, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>

    );
}
 
export default CartProvider;