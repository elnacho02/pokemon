import React from 'react'
import { useState } from 'react'
import s from "./FilterBar1.module.css"

function FilterBar() {
    
    return(
        <div className={s.container}>
            <input type="checkbox" className={s.checkbox} id='check'/>
            <label for="check" className={s.menu}>|||</label>
            <div className={s.leftPanel}>
                <div className={s.filterByContainer}>
                    <div className={s.filterBy}>
                        <span>Filter By</span>
                        <select className={s.filter}>
                            <option value="All">All</option>
                            <option value="Grass">Grass</option>
                            <option value="Fire">Fire</option>
                        </select>
                    </div>
                </div>
                <div className={s.orderByContainer}>
                    <div className={s.orderBy}>
                    <span>Order By</span>
                        <select className={s.order}>
                            <option value="ASC id">ASC Id</option>
                            <option value="DESC name">DESC Name</option>
                            <option value="ASC Name">ASC Name</option>
                        </select>  
                    </div>
                </div>
            </div>

        </div>


    )
    
    
    /* return (
        <div className={s.container}>
            <div className={s.filterByContainer}>
                <div className={s.filterBy}>
                    <span>Filter By</span>
                    <select className={s.filter}>
                        <option value="All">All</option>
                        <option value="Grass">Grass</option>
                        <option value="Fire">Fire</option>
                    </select>
                </div>
            </div>
            <div className={s.orderByContainer}>
                <div className={s.orderBy}>
                <span>Order By</span>
                    <select className={s.order}>
                        <option value="ASC id">ASC Id</option>
                        <option value="DESC name">DESC Name</option>
                        <option value="ASC Name">ASC Name</option>
                    </select>  
                </div>
            </div>

        </div>
    ) */
}

export default FilterBar
