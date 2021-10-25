import './App.css';
import { Route, BrowserRouter } from "react-router-dom"
import {Navbar, Cards, First, CardDetail} from "./components/index"

function App() {
    return (
    <div className='App'>
    <BrowserRouter>
      <Route  exact path="/"> <First/></Route>
      <Route path="/pokemons"><Navbar/></Route>
      <Route  exact path="/pokemons"> <Cards/></Route>
      <Route path="/pokemon"><Navbar/></Route>
      <Route  exact path="/pokemon/:pokeId"> <CardDetail/> </Route>
    </BrowserRouter>
    </div>
  );
}

export default App




