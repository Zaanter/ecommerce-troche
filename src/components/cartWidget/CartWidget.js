import CartIcon from './Cart.png'

const CartWidget = () => {
    return ( 
        <>
            <img src={CartIcon} style={{width:30, height:'100%', marginInline:30}} alt={'CartIcon'}></img>
        </>
     );
}
 
export default CartWidget;