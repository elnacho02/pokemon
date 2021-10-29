import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import s from "./FilterBar.module.css"

function FilterBar({Types}) {
    let history = useHistory()
    var [filter, setFilter] = useState("all")
    var [origin, setOrigin] = useState("all")
    
    function handleChangeFilter(e){
        setFilter(e.target.value);
      }
    function handleChangeOrigin(e){
        setOrigin(e.target.value);
      }
     function handleSubmit(e){
        e.preventDefault()
        history.push('?filter='+filter+'&origin='+origin)
      }
    return(
        <div className={s.container}>
            <input type="checkbox" className={s.checkbox} id='check'/>
            <label for="check" className={s.menu}><img src="http://cdn.onlinewebfonts.com/svg/img_211250.png" alt="" /></label>
            <div className={s.leftPanel}>
                
                <div className={s.orderByContainer}>
                        <div className={s.orderBy}>
                        <span>Order By</span>
                            <select className={s.order}>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                                <option value="DESC name">Lower Strength</option>
                                <option value="ASC Name">Higher Strength</option>
                            </select>  
                        </div>
                    </div>
                <div className={s.filterByContainer}>
                    <div>
                        <div>

                        </div>
                        <div>
                      
                        </div>
                    </div>
                    
                    <div className={s.filterBy}>
                        <span>Types</span>
                        <select className={s.filter} value={filter} onChange={handleChangeFilter}>
                            <option value="all">All</option>
                            {Types.map(x=>(
                                <option value={x.name}>{x.name.charAt(0).toUpperCase() + x.name.slice(1)}</option>
                            ))}
                            
                            {/* 
                            <option value="grass">Grass</option>
                            <option value="fire">Fire</option> */}
                        </select>
                    </div>
                    <button type="" onClick={handleSubmit}>Filter</button>
                </div>
                
            </div>

        </div>


    )
}

function mapStateToProps(state){
    return {
      Types: state.types
    }
  }

export default connect(mapStateToProps, null)(FilterBar)

