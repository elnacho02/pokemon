import React from 'react'
import s from "./Stats.module.css"
import StatBar from '../StatBar/StatBar'


function Stats({details}) {
    const {setColor} = require("../utils")
    console.log(details.altura)
    var colors = setColor(details.types[0])
    
    return (
        <div className={s.spec}>
                <div className={s.specCard}>
                            <div className={s.typesContainer}>
                                <h3>TYPES</h3> 
                                <div className={s.types}>
                                    {details.types.map(x => (
                                            <div className={s.logoType}>
                                                <img src={require("../../media/pixelTypes/"+x+".png").default} alt="x"/>
                                                <h5 className={x}>{x.toUpperCase()}</h5> 
                                            </div>
                                        ))} 
                                </div>
                            </div>
                    <div className={s.statsContainer}>
                        
                        <h3>STATS</h3>
                        <div className={s.stats}>
                            
                            <div className={s.hp}>
                                <img src={require("../../media/specIcons/heart.png").default} alt="" width="40px"/>
                                <StatBar att="Hp" done={details.vida} back={colors[0]} back1={colors[1]} color={colors[2]}/>
                                <h4>{details.vida}</h4>
                            </div>
                            <div className={s.strength}>
                                <img src={require("../../media/specIcons/sword.png").default} alt="" width="40px"/>
                                <StatBar att="Strength" done={details.fuerza} back={colors[0]} back1={colors[1]} color={colors[2]}/>
                                <h4>{details.fuerza}</h4>
                            </div>
                            <div className={s.defense}>
                                <img src={require("../../media/specIcons/shield.png").default} alt="" width="40px"/>
                                <StatBar  att="Defense" done={details.defensa} back={colors[0]} back1={colors[1]} color={colors[2]}/>
                                <h4>{details.defensa}</h4>
                            </div>
                            <div className={s.speed}>
                                <img src={require("../../media/specIcons/boots.png").default} alt="" width="40px"/>
                                <StatBar  att="Speed" done={details.velocidad} back={colors[0]} back1={colors[1]} color={colors[2]}/>
                                <h4>{details.velocidad}</h4>
                            </div>
                            
                        </div>
                    </div>
                    <div className={s.wh}>
                        <div className={s.height}>
                            <img src={require("../../media/specIcons/ruler.png").default} alt="" width="45px"/>
                            {details.altura<10 && (
                                <h4>{details.altura*10} Cm</h4>
                            )}
                            {details.altura>=10 && (
                                <h4>{details.altura.toString().slice(0,1).concat(",",details.altura.toString().slice(1))} Mts</h4>
                            )}
                            
                        </div>
                        <div className={s.weight}>
                            <img src={require("../../media/specIcons/weight.png").default} alt=" "width="45px"/>
                            <h4>{details.peso.toString().slice(0,-1).concat(",", details.peso.toString().slice(-1))} KG</h4>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Stats
