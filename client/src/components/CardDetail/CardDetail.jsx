import React from 'react'
import s from "./CardDetail.module.css"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom";
const axios = require('axios').default


function CardDetail  () {
    let history = useHistory()
    const { pokeId } = useParams();
    var [details, setDetails] = useState("")
    useEffect( () => {
        axios('http://localhost:3001/pokemon/' + pokeId)
       .then(x => setDetails(x.data[0]))
    },[])

    

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
                </div>
            </div>
            
        </div>
    )
    else return (
        <div>
            
        </div>
    )
}


 
  export default CardDetail

 
  
 