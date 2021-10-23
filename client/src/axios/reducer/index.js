

const initialState = {
    pokemons: []
  }
  
const rootReducer=(state = initialState, action) => {
    switch (action.type) { 
        case 'ADD_RESULT':
        return {
          ...state,
          pokemons: action.post,
          
        }
      default:
        return {...state}
    }
  }
export default rootReducer