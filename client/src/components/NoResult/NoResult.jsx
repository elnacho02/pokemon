import React from 'react'
import s from "./NoResult.module.css"
import { useHistory } from "react-router-dom"

var arr = ["https://i.gifer.com/Lw4c.gif","https://c.tenor.com/kjqof9l6gk8AAAAC/pikachu-sad.gif","https://giffiles.alphacoders.com/211/211238.gif"]

function NoResult() {
    
    let history = useHistory()
    return (
        <div className={s.noResult}>
            <h3>Sorry, we didn´t find any results  :( </h3>
            <img src={arr[Math.floor(Math.random()*3)]} alt="" />
            <div className={s.boton} onClick={()=> history.goBack()}>
                GO BACK
            </div>
      </div>
    )
}

export default NoResult
