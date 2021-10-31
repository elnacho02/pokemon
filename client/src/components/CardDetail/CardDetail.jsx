import React from 'react'
import s from "./CardDetail.module.css"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import { Waiting } from '../index';
import Stats from '../StatsCard/Stats';
const axios = require('axios').default


function CardDetail  () {
    let history = useHistory()
    var [index, setIndex] = useState(0)
    const { pokeId } = useParams();
    var [flag,setFlag] = useState(0)
    var [details, setDetails] = useState("")
    useEffect(()=> {
        setFlag(Math.ceil(Math.random()*3))
        axios('http://localhost:3001/pokemon/' + pokeId)
       .then(x => setDetails(x.data[0]))
       console.log("trai data")
    },[])
    function handleChange(e){
        if(index === 0) setIndex(1)
        else setIndex(0)
    }
    
    if(!details) return(
        <Waiting/>
    )
    if(details)return (
        <div className={s.container}>
            <img src="https://pbs.twimg.com/media/DVMT-6OXcAE2rZY.jpg" alt="" /> 
            
            <div className={s.space}>
                <div className={s.boton} onClick={()=> history.goBack()}>
                    GO BACK
                </div>
                {flag === 2 && (
                    <div className={s.message}>
                        <img src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/a4172bfc5687a8a.png" alt=""/>
                        <h5>Don´t forget that you can press me!</h5>
                    </div>
                )}
            </div>
            <div className={s.card}>
                
                <div className={s.title}>
                    <h2>{details.name.toUpperCase()}</h2>
                </div>
                
                <div className={s.images}>
                    <img src={typeof details.gif === "object" ? details.gif[index] : details.img} alt={details.name} onClick={handleChange}/> 
                </div>
                <div className={s.separador}>
                    
                </div>
            </div>
            <Stats details={details}/>
            
        </div>
    )
}


 
  export default CardDetail

 
  
 