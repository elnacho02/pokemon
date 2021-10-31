import React from 'react'
import  s from "./Display.module.css"

function Display({setDark, dark}) {
    
    return (
        
       
      <div className={s.container}>
        <span style={{ color: dark ? "grey" : "yellow" }} className={s.logo}>☀︎</span>
        <div className={s.switchCheckbox}>
          <label className={s.switch}>
            <input type="checkbox" checked={dark ? true : false} onChange={() => setDark(!dark)} />
            <span className={s.slider}> </span>
          </label>
        </div>
        <span style={{ color: dark ? "#c96dfd" : "black" }} className={s.logo}>☽</span>
        {/* <div className={s.container}>
            <span>*</span>
            <div className={s.switchCheckbox}>
                <label for="" className={s.switch}>
                    <input type="checkbox" onChange={()=> setDark(!dark)}/>
                    <span className={s.slider}></span>
                </label>
            </div>
            <span>{")"}</span>
        </div> */}
      </div>
               
        
    )
}

export default Display
