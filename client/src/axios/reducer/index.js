

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
      default:
        return {...state}
    }
  }
export default rootReducer