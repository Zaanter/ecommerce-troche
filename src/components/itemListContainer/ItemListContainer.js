import {Card, Button} from 'react-bootstrap'

const ItemListContainer = ({greeting}) => {
    return ( 
        <>
            <Card style={{ width:'100%', minHeight:1080, backgroundColor:'lightblue'}}>
                
                <Card.Body>
                    <Card.Title>Texto de la propiedad "greeting":</Card.Title>
                    <Card.Text>
                        {
                            greeting
                        }
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
     );
}
 
export default ItemListContainer;