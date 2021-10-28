import React from 'react'
import { useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionsCreators from "../../axios/actions/index";
import { bindActionCreators } from 'redux';
import {Card, FilterBar, NoResult} from "../index";
import s from "./Cards.module.css"

function useQuery(){
    return new URLSearchParams(useLocation().search)
  }
function Cards({fetchPokemons, fetchTypes, Pokemons}) {
    const query = useQuery();
    const search = query.get("search")
    const filter = query.get("filter")
    const origin = query.get("origin")
    
    useEffect( () => {
      var searchUrl = "";
      if(search) searchUrl = "http://localhost:3001/pokemons?search=" + search
      else if(filter && origin) searchUrl = "http://localhost:3001/pokemons?filter=" + filter + "&origin=" + origin
      else searchUrl = "http://localhost:3001/pokemons" 
      fetchPokemons(searchUrl)
      fetchTypes(12)
    },[search, filter]);
    

     console.log(Pokemons)
     
    if(Pokemons !== 'noResult')return (
        <div className={s.mainContainer}>
          <FilterBar />
           <div className={s.container}>
            {Pokemons.map(x => (
                  <Card 
                      id={x.id}
                      name={x.name.toUpperCase()}
                      types={x.types}
                      gif={x.gif}
                  />
              ))}
            </div>
          </div>
    )
    else return (
        <NoResult/>
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