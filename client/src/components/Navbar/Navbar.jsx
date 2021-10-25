import   React from 'react'
import { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import s from "./Navbar.module.css"


export const Navbar = () => {
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
                  <img src="https://i.ibb.co/MNWGBcG/search-238.png" alt="search" onClick={handleSubmit}/>
                </form>
            </div>
            <div className={s.about}></div>
        </div>
    )
}



export default Navbar
