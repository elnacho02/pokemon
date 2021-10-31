import   React from 'react'
import { useState } from "react"
import { useHistory } from "react-router-dom"
import s from "./Navbar.module.css"


export const Navbar = ({det, dark}) => {
    let history = useHistory()
    var [busqueda, setBusqueda] = useState("")
    const handleChange=(x)=> {
        setBusqueda(x.target.value );
      }
    async function handleSubmit(x){
        x.preventDefault();
        history.push("?search="+busqueda)
      }
    const style = {
      background: dark ?  "linear-gradient(to right, rgb(67,67,67) 0%, rgb(0,0,0) 100%)" : "white",
    }
    const style1 = {
      color: dark ? "white" : ""
    }
    
    return (
        <div style={style} className={det === true ? s.container1 : s.container}>
              {/* {det !== true && (
                <img src={require("../../media/other/nubes.jpg").default} alt=""/>
              )}
               */}
            
            <div style={style1} className={det === true ? s.logo1 : s.logo}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="logo" onClick={()=>history.push("/pokemons")}/>
                    <h2 onClick={()=>history.push("/pokemons")}>PokeApp</h2>
            </div>
            <div className={s.buscadorContainer}>
                <form className={s.buscador} onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    placeholder='Search your Pokemon'
                    id="title"
                    autoComplete="off"
                    value={busqueda}
                    onChange={(e) => handleChange(e)}/>
                  <img src="https://i.ibb.co/MNWGBcG/search-238.png" alt="search" onClick={handleSubmit}/>
                </form>
            </div>
            <div className={s.about}>
                 <h3 onClick={()=>history.push("/create")} className={s.btn}>ADD POKEMON</h3> 
            </div>
        </div>
    )
}



export default Navbar
