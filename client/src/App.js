import './App.css';
import React from 'react';
import { Route, BrowserRouter, useHistory } from "react-router-dom"
import {Navbar, Cards, First, CardDetail, Display, Create} from "./components/index"



function App() {
  let history = useHistory()
  
  
  var night = "url(https://wallpaper.dog/large/11005243.jpg)"
  var day= "url(https://wallpaper.dog/large/11005249.jpg)";
  var [dark, setDark] = React.useState(false)
  if(dark ===false) document.body.style.backgroundImage = day
  if(dark === true)document.body.style.backgroundImage = night
  return (
    <div className='App'>
        <BrowserRouter>
            
              <Route  exact path="/"> <First/></Route>
              <Route path="/pokemons"><Navbar dark={dark}/></Route>
              <Route  exact path="/pokemons"> <Cards/></Route>
              <Route  exact path="/pokemons"> <Display setDark={setDark} dark={dark} /></Route>
              <Route path="/pokemon"><Navbar det={true}/></Route>
              <Route  exact path="/pokemon/:pokeId"> <CardDetail/> </Route> 
              <Route  exact path="/create"> <Create /> </Route> 
        </BrowserRouter>
    </div>

      
    
  );
}

export default App




