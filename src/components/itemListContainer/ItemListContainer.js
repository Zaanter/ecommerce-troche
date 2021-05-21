import {Container} from 'react-bootstrap'
import ItemCount from '../ItemCount';


const ItemListContainer = ({children}) => {
    return ( 
        <>
            <Container style={{ width:'100%', minHeight:'90vh', backgroundColor:'lightblue'}}>
                <ItemCount onAdd={(cant)=>alert('Se agregan al carrito: ' + cant + ' productos.')} stock={10} initial={1}></ItemCount>
            </Container>
        </>
     );
}
 
export default ItemListContainer;