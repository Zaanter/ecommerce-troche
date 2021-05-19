import './App.css';

//Cambio bootstrap por React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

import NavbarContainer from './components/navbar/NavbarContainer.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'

function App() {
  return (
    <div>
      <NavbarContainer></NavbarContainer>
      <ItemListContainer greeting='Hola, soy un texto enviado por una propiedad.'></ItemListContainer>
    </div>
  );
}

export default App;
