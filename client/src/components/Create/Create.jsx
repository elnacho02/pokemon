import React, {useState, useEffect} from 'react'
import s from "./Create.module.css"
function Create() {
    var [prof, setProf] = useState(1)
    useEffect(() => {
        setTimeout(()=>{
            setProf(2)
        },2000)
    }, []) 
    function handleSubmit(e){
        e.preventDefault()
        setProf(3)
    }
    const style = {
        display: prof === 3 ? "" : "none"
    }
    const style1 = {
        display: prof === 3 ? "none" : ""
    }
    return (
        <div className={s.mainContainer}>
            <div className={s.divForm}>
                <div className={s.selection} style={style}>
                    <button>VOLVER HOME</button>
                    <button>VER POKEMON</button>
                </div>
                <form action="" className={s.form} onSubmit={handleSubmit} style={style1}>
                    <input type="text" placeholder='NAME'/>
                    <div className={s.stats}>
                        <input type="number" placeholder='HP'/>
                        <input type="number" placeholder='STRENGTH'/>
                        <input type="number" placeholder='DEFENSE'/>
                        <input type="number" placeholder='SPEED'/>
                        <input type="number" placeholder='WEIGHT'/>
                        <input type="number" placeholder='HEIGHT'/>
                    </div>
                    <div className={s.types}>
                        
                    </div>
                    <button type='submit'>x</button>
                </form>
            </div>
            <div className={s.msg}>
                <img src={require("../../media/oak/box.png").default} alt=""/>
                {prof === 1 && (<h5>Welcome to the laboratory</h5>)}
                {prof === 2 && (<h5>Let´s create the best Pokemon ever!</h5>)}
                {prof === 3 && (<h5>All right, your Pokemon was created succesfully!</h5>)}
            </div>
            
            <div className={s.divImg}>
                {prof === 1 && (<img src={require("../../media/oak/oak1.png").default} alt="" width="75%"/>)}
                {prof === 2 && (<img src={require("../../media/oak/oak2.png").default} alt="" width="65%"/>)}
                {prof === 3 && (<img src={require("../../media/oak/oak3.png").default} alt="" width="100%"/>)}
                
            </div>
        </div>
    )
}

export default Create
