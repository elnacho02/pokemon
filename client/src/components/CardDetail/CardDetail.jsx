import React from 'react'
import s from "./CardDetail.module.css"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom";
import { Waiting } from '../index';
const axios = require('axios').default


function CardDetail  () {
    let history = useHistory()
    const { pokeId } = useParams();
    var [details, setDetails] = useState("")
    useEffect(()=> {
        axios('http://localhost:3001/pokemon/' + pokeId)
       .then(x => setDetails(x.data[0]))
    },[])


    console.log(details)
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
                
            </div>
            <div className={s.card}>
                
                <div className={s.title}>
                    <h2>{details.name.toUpperCase()}</h2>
                </div>
                <div className={s.images}>
                    <img src={typeof details.gif === "object" ? details.gif[0] : details.img} alt="" />
                </div>
            </div>
            <div className={s.spec}>
                <div className={s.specCard}>
                    <img src="https://art.pixilart.com/1f9c115c19f93e4.png" alt="" /> 
                    
                    <div className={s.types}>
                        {details.types.map(x => (
                                <div className={s.logoType}>
                                    <img src={require("../../media/types/"+x+".png").default} alt="x"/>
                                    <h5 className={x}>{x.toUpperCase()}</h5> 
                                </div>
                            ))} 
                    </div>
                    <div className={s.statsContainer}>
                        <div className={s.stats}>
                            <div className={s.hp}>
                                <img src={require("../../media/specIcons/heart.png").default} alt="" width="40px"/>
                                <h4>Hp: {details.vida}</h4>
                            </div>
                            <div className={s.strength}>
                                <img src={require("../../media/specIcons/sword.png").default} alt="" width="40px"/>
                                <h4>Strength: {details.fuerza}</h4>
                            </div>
                            <div className={s.defense}>
                                <img src={require("../../media/specIcons/shield.png").default} alt="" width="40px"/>
                                <h4>Defense: {details.defensa}</h4>
                            </div>
                            <div className={s.speed}>
                                <img src={require("../../media/specIcons/speedometer.png").default} alt="" width="40px"/>
                                <h4>Speed: {details.velocidad}</h4>
                            </div>
                        </div>
                        <div className={s.height}></div>
                        <div className={s.weight}></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


 
  export default CardDetail

 
  
 