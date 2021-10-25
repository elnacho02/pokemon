import './App.css';
import { Route, BrowserRouter } from "react-router-dom"
import {Navbar, Cards, First} from "./components/index"

function App() {
    return (
    <BrowserRouter>
      <Route  exact path="/"> <First/></Route>
      <Route path="/home"><Navbar/></Route>
      <Route  exact path="/home"> <Cards/></Route>

    </BrowserRouter>
  );
}

export default App




