import React from 'react'
import { Card, Row, Col} from 'react-bootstrap'
import imagenSigno from '../assets/images/imagenSigno.jpeg'


const ItemDetail = () => {
    return ( 
        <>
            <Row style={{width:'90%'}}>
                <Col lg={12} >
                    <h1 style={{textAlign:'center', padding:20}}>Nombre del producto</h1>
                    <Card style={{padding:30}}>
                        <Card.Img src={imagenSigno} style={{width:'70%',marginLeft:'15%', height:350}}>
                        
                        </Card.Img>
                        <Card.Title>
                         $ 350
                        </Card.Title>
                        <Card.Subtitle>
                        Descripción..
                        </Card.Subtitle>
                    </Card>
                </Col>
            </Row>
        </>
     );
}
 
export default ItemDetail;