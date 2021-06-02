import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({id, title, price, pictureUrl}) => {
    return ( 
        <Col lg={4}>
            <Link to={'/item/'+id} style={{color:'black', textDecoration:'none'}}>
                <Card style={{cursor:'pointer',margin:5, padding:10}}>
                    <Card.Img src={pictureUrl} style={{maxHeight:180, height:180, maxWidth:350, justifyContent:'center'}} alt={title}></Card.Img>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>$ {price}</Card.Subtitle>
                </Card>
            </Link>
        </Col>
     );
}
 
export default Item;