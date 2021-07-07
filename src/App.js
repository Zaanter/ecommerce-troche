import './App.css';
//Cambio bootstrap por React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BuyerForm from './components/BuyerForm'
import Cart from './components/Cart.js'
import CartProvider from './context/CartProvider'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import ItemListContainer from './components/ItemListContainer.js'
import NavbarContainer from './components/NavbarContainer.js'
import Success from './components/Success'
import ValidatePurchase from './components/ValidatePurchase'

function App() {

  const categorias = [
    {
      id:'zapatos',
      nombre:'Zapatos'
    },
    {
      id:'zapatillas',
      nombre:'Zapatillas'
    },
    {
      id:'ojotas',
      nombre:'Ojotas'
    }
  ]
  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarContainer categorias={categorias} ></NavbarContainer>
        <Switch>
          <Route path='/' exact component={ItemListContainer}></Route>
          <Route path='/category/:id' component={ItemListContainer}></Route>
          <Route path='/item/:id' component={ItemDetailContainer}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/buyer-form' component={BuyerForm}></Route>
          <Route path='/success/:id' component={Success}></Route>
          <Route path='/validate-purchase/' component={ValidatePurchase}></Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
