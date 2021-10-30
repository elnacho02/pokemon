import React from 'react'
import s from "./Stats.module.css"
function Stats({details}) {
    return (
        <div className={s.spec}>
                <div className={s.specCard}>
                   
                    
                    <div className={s.statsContainer}>
                        <h3>STATS</h3>
                        <div className={s.stats}>
                            
                            <div className={s.hp}>
                                <img src={require("../../media/specIcons/heart.png").default} alt="" width="40px"/>
                                <h4>Hp: {details.vida}</h4>
                            </div>
                            <div className={s.speed}>
                                <img src={require("../../media/specIcons/boots.png").default} alt="" width="40px"/>
                                <h4>Speed: {details.velocidad}</h4>
                            </div>
                            <div className={s.strength}>
                                <img src={require("../../media/specIcons/sword.png").default} alt="" width="40px"/>
                                <h4>Strength: {details.fuerza}</h4>
                            </div>
                            <div className={s.defense}>
                                <img src={require("../../media/specIcons/shield.png").default} alt="" width="40px"/>
                                <h4>Defense: {details.defensa}</h4>
                            </div>
                            
                            
                        </div>
                        <div className={s.height}>

                        </div>
                        <div className={s.weight}>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Stats
