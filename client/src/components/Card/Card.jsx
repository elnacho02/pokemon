import React from 'react'
import { useHistory } from 'react-router-dom'
import s from "./Card.module.css"
function Card({name, types, Types, img, gif, id}) {
    let history = useHistory()
    
    function handleInfo(x){
        history.push("/pokemon/"+x)
      }
    return (
        <div className={s.mainContainer}>
            <div className={s.container} onClick={()=>handleInfo(id)}>
                <div className={s.name}>
                    <h4>{name}</h4>
                </div>
                <div className={s.separador}>
                    <div className={s.rojo}/>
                    <div className={s.gris}/>
                    <div className={s.blanco}/>
                </div>  
                <div className={s.img}>
                    <img src={gif} alt={s.gif}/>
                </div>
                <div className={s.types}>
                     {types.map(x=>(
                        <h5 className={x}>{x.toUpperCase()}</h5>
                    ))} 
                </div>
            </div> 
        </div>
    )
}

export default Card
