import React from 'react'
import s from "./NoResult.module.css"
import { useHistory } from "react-router-dom"


function NoResult() {
    
    let history = useHistory()
    return (
        <div className={s.noResult}>
            <h3>Sorry, we didn´t find any results  :( </h3>
            <img src="https://c.tenor.com/kjqof9l6gk8AAAAC/pikachu-sad.gif" alt="" />
            <div className={s.boton} onClick={()=> history.goBack()}>
                GO BACK
            </div>
      </div>
    )
}

export default NoResult
