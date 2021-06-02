import './App.css';

//Cambio bootstrap por React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

import NavbarContainer from './components/NavbarContainer.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
      <NavbarContainer categorias={categorias} ></NavbarContainer>
      <Switch>
        <Route path='/' exact component={ItemListContainer}></Route>
        <Route path='/category/:id' component={ItemListContainer}></Route>
        <Route path='/item/:id' component={ItemDetailContainer}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
