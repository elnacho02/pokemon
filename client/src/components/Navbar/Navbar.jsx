import   React from 'react'
import { connect } from "react-redux";
import * as actionsCreators from "../../axios/actions/index";
import { bindActionCreators } from 'redux';
import { useState } from "react"
import { useHistory } from "react-router-dom"
import s from "./Navbar.module.css"


export const Navbar = ({fetchSearch}) => {
    let history = useHistory()
    var [busqueda, setBusqueda] = useState("")
    
    const handleChange=(x)=> {
        setBusqueda(x.target.value );
      }
    async function handleSubmit(x){
        x.preventDefault();
        history.push("?search="+busqueda)
      }
    return (
        <div className={s.container}>
            
            <div className={s.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="logo" />
                <h2>PokeApp</h2>
            </div>
            <div className={s.buscadorContainer}>
                <form className={s.buscador} onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    placeholder='Busca el pokemon que quieras'
                    id="title"
                    autoComplete="off"
                    value={busqueda}
                    onChange={(e) => handleChange(e)}/>
                  <h3 onClick={handleSubmit}>O</h3>
                </form>
            </div>
            <div className={s.about}></div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
  }

export default connect(null,mapDispatchToProps)(Navbar)
