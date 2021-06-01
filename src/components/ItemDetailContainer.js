import React, {useState, useEffect} from 'react'
import { Container, Spinner } from "react-bootstrap";
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState('')

    useEffect(()=>{
        const getItems = new Promise((res, rej) => {
            setTimeout(()=>{
                res(true)
            },2000)
        })

        getItems.then(()=>{
            setProducto({
                nombre:'Zapato',
                precio:'350',
                descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            })
        })

    },[])


    if(producto == ''){
        return(
            <Container style={{ height:'90vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Spinner animation="border" variant="dark" style={{width:50, height:50}} />
            </Container>
        )
    }else{
        return ( 
            <Container style={{ height:'90vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                {
                    producto && <ItemDetail nombre={producto.nombre} precio={producto.precio} descripcion={producto.descripcion}></ItemDetail> 
                }
            </Container>
         );
    }
}
 
export default ItemDetailContainer;