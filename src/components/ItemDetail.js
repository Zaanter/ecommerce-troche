import React, {useEffect, useState} from 'react'
import { Card, Row, Col} from 'react-bootstrap'
import zapato from '../assets/images/zapato.jpeg'


const ItemDetail = ({nombre, precio, descripcion}) => {

    return ( 
        <>
            <Row style={{width:'90%'}}>
                <Col lg={12} >
                    <h1 style={{textAlign:'center', padding:20}}>{nombre}</h1>
                    <Card style={{padding:30}}>
                        <Card.Img src={zapato} style={{width:'70%',marginLeft:'15%', height:350}}>
                        
                        </Card.Img>
                        <Card.Title>
                         $ {precio}
                        </Card.Title>
                        <Card.Subtitle>
                            {descripcion}
                        </Card.Subtitle>
                    </Card>
                </Col>
            </Row>
        </>
     );
}
 
export default ItemDetail;