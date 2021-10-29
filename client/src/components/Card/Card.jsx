import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import s from "./Card.module.css"

function Card({name, types, Types, img, gif, id}) {

    let history = useHistory()
    var [clicked,setClicked] = useState("")
    
    function handleInfo(x){
        setClicked(x)
        setTimeout(()=>history.push("/pokemon/"+x), 900)
      }
    
      return (
        <div className={s.mainContainer}>
            <div className={clicked === id ? s.clicked : s.container} onClick={()=>handleInfo(id)}>
                <div className={s.name}>
                    <h4>{name.toUpperCase()}</h4>
                </div>
                <div className={s.separador}>
                    <div className={s.gris}><div className={s.blanco}/></div>
                    
                </div>  
                <div className={s.img}>
                   {img && (<img src={img} alt={name} className={s.poke}/>)}
                   {!img && ( <img src={require("../../media/gifs/"+(name.charAt(0).toUpperCase()+name.slice(1)).replace("-m","_Male").replace("-f","_Female")+".gif").default || gif} alt={name} className={s.poke}/> )} 
                   
                </div>
                <div className={s.types}>
                     
                     {types.map(x=>(
                        <div className={s.logoType}>
                            <img src={require("../../media/types/"+x+".png").default} alt="x"/>
                            <h5 className={x}>{x.toUpperCase()}</h5> 
                        </div>
                        
                    ))} 
                </div>
            </div> 
        </div>
    )
}

export default Card
