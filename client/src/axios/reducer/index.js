

const initialState = {
    pokemons: []
  }
  
const rootReducer=(state = initialState, action) => {
    switch (action.type) { 
        case 'ADD_RESULT':
        if(typeof action.post === "object"){
          return {
            ...state,
            pokemons: [action.post],
            
          }
        }
        else return {
          ...state,
          pokemons: action.post,
          
        }
      default:
        return {...state}
    }
  }
export default rootReducer