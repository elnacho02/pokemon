import React from 'react'
import s from "./Waiting.module.css"
const gifFra = [
    {
        gif: "https://c.tenor.com/tQVZsHnTSZgAAAAi/pikachu.gif",
        fra: "I'm going as fast as I can!",
        width: "150px"
    },
    {
        gif:"https://i.gifer.com/JTz3.gif",
        fra: "Loading...",
        width: "250px"
    },
    {
        gif:"http://pa1.narvii.com/6320/00d1bd4e27de0c4fce3140a6add07572429306e1_00.gif",
        fra: "Maybe your results are on fire...",
        width: "250px"
    }
]

function Waiting() {
    
    var i = Math.floor(Math.random()*3)
    console.log(i)
    return (
        <div className={s.container}>
            <h3>{gifFra[i].fra}</h3>
            <img src={gifFra[i].gif} alt="" width={gifFra[i].width}/>
            
            <div>
                <div class={s.loader}></div>
            </div>
        </div>
    )
}

export default Waiting
