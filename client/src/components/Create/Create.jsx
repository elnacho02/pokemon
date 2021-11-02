import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import s from "./Create.module.css"
import { connect } from 'react-redux'
import * as actionsCreators from "../../axios/actions/index";
import { bindActionCreators } from 'redux';


function Create({types, fetchTypes}) {
    let history = useHistory()
    var [prof, setProf] = useState(1)
    var [tipos, setTipos] = useState([])
    var [pokemonId, setPokemonId] = useState("")
    var [alert, setAlert] = useState(false)
    
    useEffect(() => {
        setTimeout(()=>{
            setProf(2)
        },3000)
        fetchTypes(18)
    }, []) 
    
    const style = {
        display: prof === 3 ? "" : "none"
    }
    const style1 = {
        display: prof === 3 ? "none" : ""
    }

    function handleTipos(x){
        if(tipos.includes(x)) return;
        if(tipos.length<2){setTipos([...tipos, x]); return}
        else {
            setAlert("Your pokemon cannot have more than 2 types!")
            setTimeout(()=>setAlert(false),3200)
        }
    }
    var [info, setInfo] = useState({
            name:"",
            img:"",
            vida:"",
            fuerza:"",
            defensa:"",
            velocidad:"",
            peso:"",
            altura:"",
            types: tipos
       })
       
       function handleChange(e){
        const value = e.target.value;
        setInfo({
          ...info,
          [e.target.name]: value
        });
       }



     function handleSubmit(e){
        e.preventDefault()
        if(tipos.length>=1){
            fetch("http://localhost:3001/createPokemon",{
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				name: info.name,
                img: info.img,
                vida: info.vida,
                fuerza: info.fuerza,
                defensa: info.defensa,
                velocidad: info.velocidad,
                peso: info.peso,
                altura: info.altura,
                types: tipos
			})
		}).then(x=>x.json()).then(x=>setPokemonId(x.id))
        setProf(3)
        }
        else if(tipos.length<1) {
            setAlert("Your Pokemon needs at least one type")
            setTimeout(()=>setAlert(false),3200)
    }
}


    console.log(pokemonId)

    return (
        <div className={s.mainContainer}>
            <div className={s.divForm}>
                
                <div className={s.selection} style={style}>
                    <button onClick={()=>history.push("/pokemons")}>BACK TO HOME</button>
                    <button onClick={()=>history.push("/pokemon/"+pokemonId)}>SEE YOUR POKEMON</button>
                </div>
                
                
                <form action="" className={s.form} onSubmit={handleSubmit} style={style1}>
                    <div className={s.boton} onClick={()=> history.goBack()}>
                            GO BACK
                    </div>
                    
                    
                    
                    <div className={s.name}>
                        <input type="text" required name='name' onChange={(e)=>handleChange(e)}/>
                        <h5>NAME</h5>
                    </div>
                    
                    <div className={s.stats}>
                       <div className={s.input}>
                            <h5>HP</h5>
                            <input type="number" name='vida' max="110" min="1" required onChange={(e)=>handleChange(e)}/>
                       </div> 
                       <div className={s.input}>
                            <h5>SPEED</h5>
                            <input type="number" name='velocidad' max="110" min="1" required onChange={(e)=>handleChange(e)}/>
                       </div>

                       <div className={s.input}>
                            <h5>STR</h5>
                            <input type="number"  name="fuerza" max="110" min="1" required onChange={(e)=>handleChange(e)}/>
                       </div>

                       <div className={s.input}>
                            <h5>DEFENSE</h5>
                            <input type="number" name='defensa' max="110" min="1" required onChange={(e)=>handleChange(e)}/>
                       </div>

                       <div className={s.input}>
                            <h5>WEIGHT</h5>
                            <input type="number" name='peso' min="1" required onChange={(e)=>handleChange(e)}/>
                       </div>

                       <div className={s.input}>
                            <h5>HEIGTH</h5>
                            <input type="number" name='altura' min="1" required onChange={(e)=>handleChange(e)}/> 
                       </div>
                        
                    </div>
                        <div className={s.img}>
                            <input type="text" name="img" onChange={(e)=>handleChange(e)}/>
                            <h5>IMAGE</h5>
                        </div>
                    
                    <div className={s.type}>
                        <h5>TYPES</h5>
                        {tipos  && tipos.map(x=>(
                            <h6 onClick={()=>setTipos(tipos.filter(e => e !== x))}>{x}</h6>
                        ))}
                    </div>
                    
                    <div className={s.types}>
                        <div className={s.typesImg}>
                            {types.map((x)=>(
                                <img 
                                src={require("../../media/newTypes/"+x.name+".png").default} 
                                alt="" width="30px" 
                                onClick={()=>handleTipos(x.name)}
                                className={tipos.includes(x.name)? s.selected : s.noselected}
                                />
                            ))}
                        </div>
                    </div>
                    {alert && (
                        <div className={s.alert}>
                            <h4>{alert}</h4>
                        </div>
                    )}
                    <button type='submit'>CREATE POKEMON</button>
                </form>
            </div>
            
            
            
            
            
            
            
            
            
            {prof === 1 && (
                <div className={s.msg}>
                    <img src={require("../../media/oak/box.png").default} alt=""/>
                    <h5>Welcome to the laboratory</h5>
                </div>)}
             {prof === 2 && (
                <div className={s.msg}>
                    <img src={require("../../media/oak/box.png").default} alt=""/>
                    <h5>Let´s create the best Pokemon ever!</h5>
                </div>)}
            {prof === 3 && (
                <div className={s.msg}>
                    <img src={require("../../media/oak/box.png").default} alt=""/>
                    <h5>All right, your Pokemon was created succesfully!</h5>
                </div>)}
            <div className={s.divImg}>
                {prof === 1 && (<img src={require("../../media/oak/oak1.png").default} alt="" width="75%"/>)}
                {prof === 2 && (<img src={require("../../media/oak/oak2.png").default} alt="" width="65%"/>)}
                {prof === 3 && (<img src={require("../../media/oak/oak3.png").default} alt="" width="100%"/>)}
                
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    
    types: state.types
  
})

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionsCreators, dispatch)
  }
export default connect(mapStateToProps, mapDispatchToProps)(Create)




