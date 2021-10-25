import React from 'react'
import { useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionsCreators from "../../axios/actions/index";
import { bindActionCreators } from 'redux';
import {Card} from "../index";
import s from "./Cards.module.css"

function useQuery(){
    return new URLSearchParams(useLocation().search)
  }
function Cards({fetchPokemons, Pokemons}) {
    const query = useQuery();
    const search = query.get("search")
    console.log(search)
      
    useEffect(() => {
      const searchUrl = search ? "http://localhost:3001/pokemons?search=" + search : "http://localhost:3001/pokemons" 
      fetchPokemons(searchUrl)
    },[search]);
    

     console.log(Pokemons)
     
    return (
        <div className={s.container}>
            {Pokemons.map(x => (
                <Card 
                    name={x.name.toUpperCase()}
                    img={x.img}
                    types={x.types}
                    gif={x.gif}
                />
            ))}
        </div>
    )
}

function mapStateToProps(state){
    return {
      Pokemons: state.pokemons
    }
  }
  
  function mapDispatchToProps(dispatch){
    return bindActionCreators(actionsCreators, dispatch)
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cards)