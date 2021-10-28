import React from 'react'
import s from "./CardDetail.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
const axios = require('axios').default


function CardDetail  () {
    const { pokeId } = useParams();
    var [details, setDetails] = useState("")
    useEffect( () => {
        axios('http://localhost:3001/pokemon/' + pokeId)
       .then(x => setDetails(x.data[0]))
    },[])

    console.log(details, "details")

    if(details)return (
        <div className={s.container}>
            <img src="https://pbs.twimg.com/media/DVMT-6OXcAE2rZY.jpg" alt="" />
            <div className={s.card}>
                
                <div className={s.title}>
                    <h2>{details.name.toUpperCase()}</h2>
                </div>
                <div className={s.images}>
                    <img src={details.gif} alt="" />
                </div>
                <div className={s.types}>
                    {details.types.map(x => (
                        <h5 className={x}>{x.toUpperCase()}</h5>
                    ))}
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

 
  
 