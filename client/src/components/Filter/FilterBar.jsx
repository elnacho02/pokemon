import React from 'react'
import { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { connect } from 'react-redux'
import * as actionsCreators from "../../axios/actions/index";
import { bindActionCreators } from 'redux';
import s from "./FilterBar.module.css"

function useQuery(){
    return new URLSearchParams(useLocation().search)
  }


function FilterBar({Types, setOrder}) {
    const query = useQuery();
    const filterr = query.get("filter")
    const originn = query.get("origin")
    let history = useHistory()
    var [filter, setFilter] = useState(filterr ? filterr : "all")
    var [origin, setOrigin] = useState(originn ? originn : "all")
    var [orderBy, setOrderBy] = useState("default")
    
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
    function handleOrder(e){
        setOrder(e.target.value)
        setOrderBy(e.target.value)
    }
    
    return(
        <div className={s.container}>
            <input type="checkbox" className={s.checkbox} id='check'/>
            <label for="check" className={s.menu}><img src="http://cdn.onlinewebfonts.com/svg/img_211250.png" alt="" /></label>
            <div className={s.leftPanel}>
                
                <div className={s.orderByContainer}>
                        <div className={s.orderBy}>
                        <span>Order By</span>
                            <select value={orderBy} className={s.order} onChange={handleOrder}>
                                <option value="default">Default</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                                <option value="higher-str">Higher Strength</option>
                                <option value="lower-str">Lower Strength</option>
                                <option value="+50">{"Fuerza > 50"}</option>
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
                        </select>
                        <span>Origin</span>
                        <select className='' value={origin} onChange={handleChangeOrigin}>
                            <option value="all">All</option>
                            <option value="db">Created by me</option>
                            <option value="api">Originals</option>
                        </select>
                    </div>
                    <button type="" onClick={handleSubmit}>Filter</button>
                </div>
                
            </div>

        </div>


    )
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionsCreators, dispatch)
  }

function mapStateToProps(state){
    return {
      Types: state.types
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)

