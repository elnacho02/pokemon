const axios = require('axios').default


export function addResult(post) {
    return {
      type: 'ADD_RESULT',
      post
    }
  }
export function addTypes(post) {
    return {
      type: 'ADD_TYPES',
      post
    }
  }

export function fetchPokemons(url) {
  return function (dispatch) {
    //dispatch(getPost());
    console.log(url)
    axios(url)
    .then(x => dispatch(addResult(x.data)))
    }
  }

  export function fetchTypes(i) {
    return function (dispatch) {
      //dispatch(getPost());
      axios('http://localhost:3001/getTypes/'+i)
      .then(x => dispatch(addTypes(x.data)))
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