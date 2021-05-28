import { Container } from "react-bootstrap";
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    return ( 
        <Container style={{ height:'90vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <ItemDetail></ItemDetail>
        </Container>
     );
}
 
export default ItemDetailContainer;