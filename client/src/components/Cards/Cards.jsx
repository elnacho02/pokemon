import React from 'react'
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionsCreators from "../../axios/actions/index";
import { bindActionCreators } from 'redux';
import {Card, FilterBar, NoResult, Pagination, Waiting} from "../index";
import s from "./Cards.module.css"

function useQuery(){
    return new URLSearchParams(useLocation().search)
  }
function Cards({fetchPokemons, deletePokemons,fetchTypes, Pokemons}) {
    const query = useQuery();
    const search = query.get("search")
    const filter = query.get("filter")
    const origin = query.get("origin")
    
    var [pag, setPag] = useState(0)
    
    useEffect(() => {
      setPag(0)
    }, [Pokemons])

    useEffect( () => {
      var searchUrl = "";
      if(search) searchUrl = "http://localhost:3001/pokemons?search=" + search
      else if(filter && origin) searchUrl = "http://localhost:3001/pokemons?filter=" + filter + "&origin=" + origin
      else searchUrl = "http://localhost:3001/pokemons" 
      deletePokemons()
      fetchPokemons(searchUrl)
      fetchTypes(12)
    },[search, filter]);
         
    console.log(Pokemons)

    if( !Pokemons.length ) return(
      <Waiting />
      )
    else if(Pokemons !== 'noResult' || Pokemons.lenght >= 1)return (
        <div className={s.mainContainer}>
          <FilterBar />
           <div className={s.container}>
            {(Pokemons.slice(pag, (parseInt(pag)+9))).map(x => (
                  <Card 
                      id={x.id}
                      name={x.name}
                      types={x.types}
                      img={x.img}
                      gif={x.gif}
                  />
              ))}
            </div>
              <Pagination pag={pag} setPag={setPag} pokemons={Pokemons}/>

        </div>
    ) 
    
    else if(Pokemons === "noResult")return (
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