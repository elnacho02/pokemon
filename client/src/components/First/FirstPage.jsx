import React from 'react'
import { useEffect } from 'react'
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
import * as actionsCreators from "../../axios/actions/index";
import { bindActionCreators } from 'redux';
import StatBar from '../StatBar/StatBar';


function FirstPage({fetchPokemons}) {
    useEffect(() => {
        fetchPokemons('http://localhost:3001/pokemons')
    }, [])
    return (
        <div>
            <Link to="/pokemons">HOME</Link>
            <StatBar done="95"/>
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
