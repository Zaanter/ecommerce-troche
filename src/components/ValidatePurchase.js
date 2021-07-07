import { Button, Col, Container } from 'react-bootstrap';
import React, { useState } from 'react'

import {Link} from 'react-router-dom'
import firebase from '@firebase/app';
import { getFirestore } from '../firebase';

const ValidatePurchase = () => {
    
    const [id, setId] = useState('')
    const [purchase, setPurchase] = useState(null)
    const db = getFirestore()

    const findPurchase = () => {
        if(id === ''){
            alert('El ID no puede estar vacío.')
        }else{
            db.collection('orders').doc(id).get().then((snap) => {
                if(snap.data()){
                    setPurchase(snap.data())
                }else{
                    alert('Ese ID no es correcto')
                    setId('')
                }
            }).catch((error) => {
                alert('Ha ocurrido un error.')
            })
        }
    }
    
    if(purchase){
        return(
            <Container style={{minHeight:'90vh', backgroundColor:'lightblue', display:'flex', flexDirection:'column', width:'100%'}}>
                <h3 style={{textAlign:'center', marginBottom:35}}>Detalle de la compra:  {id} </h3>
                <Col>
                        <h3 style={{textAlign:'center', marginBottom:30, width:'100%'}}>Datos del comprador:</h3>
                            {
                                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <div style={{height:90, width:'80%', justifyContent:'space-between',display:'flex', alignItems:'center', paddingLeft:20, paddingRight:20,  paddingBottom:20, marginBottom:20}}>
                                        <span style={{fontWeight:'600'}}>Nombre: {purchase.buyer.name}</span>
                                        <span style={{fontWeight:'600'}}>Apellido: {purchase.buyer.surname}</span>
                                        <span>email: {purchase.buyer.email}</span>
                                        <span>celular: {purchase.buyer.phone}</span>
                                    </div>
                                </div>
                            }
                        <h3 style={{textAlign:'center', marginBottom:30, width:'100%'}}>Carrito de compras</h3>
                            {
                                purchase.items.map(item => {
                                    return(
                                        <div key={item.item.id} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                            <div style={{height:90, width:'80%', justifyContent:'space-between',display:'flex', alignItems:'center', paddingLeft:20, paddingRight:20, borderBottomColor:'grey', borderBottom:'solid', paddingBottom:20, marginBottom:20}}>
                                                <img src={item.item.url} style={{height:90, width:90}}></img>
                                                <span style={{fontWeight:'600'}}>{item.item.nombre}</span>
                                                <span>cantidad: {item.quantity}</span>
                                                <span>$ {item.item.precio} c/u</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        <div  style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <div style={{height:90, width:'80%', justifyContent:'space-between',display:'flex', alignItems:'center', paddingLeft:20, paddingRight:20,  paddingBottom:20, marginBottom:20}}>
                                <div style={{height:90, width:90}}></div>
                                <span style={{fontWeight:'600'}}></span>
                                <span>Precio total: </span>
                                <span>$ {purchase.total}</span>
                            </div>
                        </div>
                            
                </Col>        
            </Container>
        )
    }else{
        return ( 
            <Container style={{height:'90vh', backgroundColor:'lightblue', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <h3>Verificar estado de la compra</h3>
                <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', width:'50%', margin:30}}>
                    <span>Ingrese el id de la compra:</span>
                    <input onChange={(e)=>setId(e.target.value)} value={id} style={{width:'100%', marginTop:15, marginBottom:15}}></input>
                    <Button onClick={() => findPurchase()}>Verificar</Button>
                </div>
            </Container>
         );
    }
}
 
export default ValidatePurchase;