import './App.css';
import { Route, BrowserRouter } from "react-router-dom"
import { useEffect} from "react"
import { connect } from 'react-redux'
import * as actionsCreators from "./axios/actions/index";
import { bindActionCreators } from 'redux';

function App({fetchPokemons, Pokemons}) {
  useEffect(() => {
       fetchPokemons()
    },[])
  console.log(Pokemons)
    return (
    <BrowserRouter>
      <Route  path="/">
         <div className="App">
           { Pokemons.map(x=>(
             <div>
              <h6>{x.name}</h6>
              <img src={x.gif} alt="asdas"/>
              <h1>{console.log(x.gif)}</h1>
             </div>
             
           ))}
         </div>
         
      </Route>
    </BrowserRouter>
  );
}

function mapStateToProps(state){
  return {
    Pokemons: state.pokemons
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionsCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)




