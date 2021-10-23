const axios = require('axios').default


export function addResult(post) {
    return {
      type: 'ADD_RESULT',
      post
    }
  }

export function fetchPokemons() {
  return function (dispatch) {
    //dispatch(getPost());
    axios('http://localhost:3001/pokemons')
    .then(x => dispatch(addResult(x.data)))
    }
  }


  
 /*  fetch(valor).then((data)=>{
    dispatch(addResult(data.results));
    console.log(data)
    } */
    
    /* axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then(r => r.data)
      .then(d => dispatch(receivePost(d)))
      .catch(e => console.log(e));*/