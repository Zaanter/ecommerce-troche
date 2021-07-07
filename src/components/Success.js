import {Button, Container} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

import {IoCheckmarkCircleSharp} from 'react-icons/io5'

const Success = () => {
    const { id } = useParams()
    return ( 
        <Container style={{backgroundColor:'green', borderRadius:1000, marginTop:'5vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <IoCheckmarkCircleSharp style={{marginBottom:70 }} color={'white'} size={'10%'}></IoCheckmarkCircleSharp>
            <h4 style={{color:'white'}}>La compra se ha realizado correctamente</h4>
            <span style={{color:'white', margin:20}}>Tu código de orden es : <strong>{id}</strong> </span>
            
            <span style={{color:'white', margin:20}}>Puedes guardarlo y seguir el estado de tu orden.</span>
            <Button><Link to='/' style={{color:'white', textDecoration:'none'}}>Volver</Link></Button>
        </Container>
     );
}
 
export default Success;