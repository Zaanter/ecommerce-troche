import './App.css';

//Cambio bootstrap por React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

import NavbarContainer from './components/navbar/NavbarContainer.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'

function App() {
  return (
    <div>
      <NavbarContainer></NavbarContainer>
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
