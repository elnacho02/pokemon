import React from 'react'
import s from "./Pagination.module.css"


function Pagination({pag, setPag, pokemons}) {
    function handleChange(e){
        e.preventDefault()
        setPag(e.target.value)
    }
    return (
        <div className={s.container}>
            <div className={s.botones}>
            {pokemons.length>0 && <button type="" value={0} onClick={handleChange} className={pag=== "0" || !pag ? s.selected : s.boton}>1</button>}
            {pokemons.length>9 && <button type="" value={9} onClick={handleChange} className={pag==="9" ? s.selected : s.boton}>2</button>}
            {pokemons.length>18 && <button type="" value={18} onClick={handleChange} className={pag==="18" ? s.selected : s.boton}>3</button>}
            {pokemons.length>27 && <button type="" value={27} onClick={handleChange} className={pag==="27" ? s.selected : s.boton}>4</button>}
            {pokemons.length>36 && <button type="" value={36} onClick={handleChange} className={pag==="36" ? s.selected : s.boton}>5</button>}
            </div>
        </div>
        
    )
}

export default Pagination
