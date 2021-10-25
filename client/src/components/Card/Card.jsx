import React from 'react'
import s from "./Card.module.css"
function Card({name, types, img, gif}) {
    return (
        <div className={s.mainContainer}>
            <div className={s.name}>
                <h4>{name}</h4>
            </div>
            <div className={s.img}>
                <img src={gif} alt={s.gif} />
            </div>
        </div>
    )
}

export default Card
