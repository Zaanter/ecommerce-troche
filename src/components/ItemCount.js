import React , {useState} from 'react'
import { Card, Button } from "react-bootstrap"

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)

    const handleClick = (value) => {
        if(cantidad+value >= 1 && cantidad+value <= stock){
            setCantidad(value+cantidad)
        }
    }

    return ( 
        <>
            <Card className="text-center" style={{ width: '20%', height:250 }}>
                <Card.Body>
                    <Card.Title>Producto</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Stock: {stock}</Card.Subtitle>
                    <Card.Text>
                    {cantidad}
                    </Card.Text>
                    <div style={{margin:5}}>
                        <Button style={{margin:5}} onClick={()=>handleClick(-1)}>-</Button>
                        <Button style={{margin:5}} onClick={()=>handleClick(1)}>+</Button>
                    </div>
                    <Button onClick={()=>onAdd(cantidad)}>Agregar al carrito</Button>
                    
                </Card.Body>
            </Card>
        </>
     );
}
 
export default ItemCount;