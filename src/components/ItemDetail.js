import { Button, Card, Col, Row } from 'react-bootstrap'
import React, {useEffect, useState} from 'react'

import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import zapato from '../assets/images/zapato.jpeg'

const ItemDetail = ({nombre, precio, descripcion, url}) => {

    const [cantidad , setCantidad ] = useState('')

    const onAdd = (cantidad) =>{
        setCantidad(cantidad)
    }

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
                            <div style={{justifyContent:'center', display:'flex'}}>
                                <ItemCount onAdd={(cant)=> onAdd(cant)} stock={10} initial={1}></ItemCount>
                            </div>
                            :
                            <div style={{margin:50, display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                                <h5>Has seleccionado: {cantidad} productos.</h5>
                                <Button><Link to={'/cart'} style={{color:'white', textDecoration:'none'}}>Terminar mi compra</Link></Button>
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
 
export default ItemDetail;