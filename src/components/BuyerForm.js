import '../App.css'
import '@firebase/firestore'

import { Container, Spinner } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react'

import { CartContext } from '../context/CartProvider';
import { Redirect } from 'react-router';
import firebase from '@firebase/app';
import { getFirestore } from '../firebase';

const BuyerForm = () => {
    
    const cart = useContext(CartContext)
    
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [secondEmail, setSecondEmail] = useState('')
    const [active, setActive] = useState(true)

    const [loading, setLoading] = useState(false)
    const [purchaseSuccess, setPurchaseSuccess] = useState(false)
    const [id,setId] = useState('')
    const db = getFirestore()
    
    const buy = (e) => {
        e.preventDefault()
        if(email !== '' && phone !== '' && name !== '' && surname !== '' && secondEmail !== '' ){
            if(email === secondEmail){
                setLoading(true)
                let _totalPrice = 0
                cart.cartItems.map(item => {
                    const cant = item.quantity
                        _totalPrice += item.item.precio * cant
                })
        
                const order = {
                    buyer:{
                        name,
                        email,
                        phone,
                        surname
                    },
                    items:cart.cartItems,
                    total: _totalPrice,
                    date: firebase.firestore.Timestamp.fromDate(new Date())
                }
            
                db.collection('orders').add(order).then(({id})=>{
                    cart.cartItems.map((item) => {
                        db.collection('items').doc(item.item.id).update({
                            stock: item.item.stock - item.quantity
                        })
                    })
                    setId(id)
                }).catch((error)=> {
                    console.log('Hubo un error')
                }).finally(()=> {
                    setLoading(false)
                    setPurchaseSuccess(true)
                    cart.clear()
                })
            }else{
                setSecondEmail('')
                alert('Los emails no coinciden.')
            }
        }else{
            e.preventDefault();
            alert('Deben estar todos los campos llenos para continuar.')
        }
    }

    useEffect(()=>{
        if(email !== '' && phone !== '' && name !== '' && surname !== '' && secondEmail !== ''){
            setActive(false)
        }else{
            setActive(true)
        }
    },[email,phone,name,surname,secondEmail])
    
    if(purchaseSuccess){
        return(
            <Redirect to={`/success/${id}`} />
        )
    }else{
        if(cart.cartItems.length === 0){
            return(
                <Redirect to='/'></Redirect>
            )
        }
    }


    if(loading){
        return(
            <Container style={{ height:'90vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Spinner animation="border" variant="dark" style={{width:50, height:50}} />
            </Container>
        )
    }
    
    return ( 
    <>
        <div style={{minHeight:'90vh', minWidth:'100%', justifyContent:'center', display:'flex', alignItems:'center'}}>
            <form style={{width:'50%', height:900, backgroundColor:'lightblue',justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
                
                <span style={{fontSize:32}}>Para finalizar la compra, cargue sus datos:</span>
                
                <div className={'customInput'}>
                    <label style={{marginBottom:5}}>Nombre</label>
                    <input 
                    onChange={(e)=>{
                        setName(e.target.value)
                        
                    }} 
                    type={'text'}
                    value={name}
                    ></input>
                </div>

                <div className={'customInput'}>
                    <label style={{marginBottom:5}}>Apellido</label>
                    <input 
                    onChange={(e)=>{
                        setSurname(e.target.value)
                        
                    }} 
                    type={'text'}
                    value={surname}
                    ></input>
                </div>

                <div className={'customInput'}>
                    <label style={{marginBottom:5}}>Email</label>
                    <input
                    onChange={(e)=>{
                        setEmail(e.target.value)
                        
                    }}
                    type={'email'}
                    value={email}
                    ></input>
                </div>

                <div className={'customInput'}>
                    <label style={{marginBottom:5}}>Repetir email</label>
                    <input
                    onChange={(e)=>{
                        setSecondEmail(e.target.value)
                        
                    }} 
                    type={'email'}
                    value={secondEmail}
                    ></input>
                </div>

                <div className={'customInput'}>
                    <label style={{marginBottom:5}}>Teléfono</label>
                    <input
                    onChange={(e) => {
                        setPhone(e.target.value)
                        
                    }} 
                    type={'number'}
                    value={phone}
                    ></input>
                </div>

                
                <button disabled={active} onClick={(e)=> buy(e)}>Comprar</button>
            </form>
        </div>
    </>
    );
}
 
export default BuyerForm;