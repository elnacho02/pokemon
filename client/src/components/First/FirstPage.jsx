import React from 'react'
import { useEffect } from 'react'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux'
import * as actionsCreators from "../../axios/actions/index";
import { bindActionCreators } from 'redux';

import s from "./FirstPage.module.css"

function FirstPage({fetchPokemons}) {
  
  
  useEffect(() => {
        fetchPokemons('http://localhost:3001/pokemons')
       
    }, [])
    
    
    
    return (
        <div className={s.mainContainer}>
            <img src={require("../../media/inicio/1.png").default} alt=""/>
            <div className={s.imgContainer}>
              
            </div>
            <div className={s.linkContainer}> 
              <h1 data-heading="Slide">Hello There!</h1>
              {/* <a class={s.coolBeans} href="http://localhost:3000/pokemons">Let´s find your Pokemon!</a> */}
              <NavLink to="/pokemons" className={s.coolBeans}>Let´s find your Pokemon!</NavLink>
            </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(FirstPage)
