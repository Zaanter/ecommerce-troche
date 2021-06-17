import './App.css';
//Cambio bootstrap por React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cart from './components/Cart.js'
import CartProvider from './context/CartProvider'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import ItemListContainer from './components/ItemListContainer.js'
import NavbarContainer from './components/NavbarContainer.js'

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
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
