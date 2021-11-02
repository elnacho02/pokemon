

const initialState = {
    pokemons: [],
    types: []
  }
  
const rootReducer=(state = initialState, action) => {
    switch (action.type) { 
        case 'ADD_RESULT':
         return {
          ...state,
          pokemons: action.post,
          
        }
        case 'ADD_TYPES':
         return {
          ...state,
          types: action.post,
        }
        case 'DELETE_POKEMONS':
          return{
            ...state,
            pokemons: []
          }
                
      default:
        return {...state}
    }
  }
export default rootReducer