const NodeCache = require('node-cache');
const axios = require('axios').default
const cache = new NodeCache();


async function duration (req,res,next){

    /* if(req.method !== 'GET'){
        console.error('Not a GET method')
        return next();
    } */

    const key = "api";
    const cachedResponse = cache.get(key);
    
    if(cachedResponse){
        console.log('Cache hit for '+ key);
        return(cachedResponse)
    } else {
        
        var api = await axios('https://pokeapi.co/api/v2/pokemon?limit=40').then(response => response.data.results);
    
                await Promise.all(api.map(async element => 
                await axios(element.url)
                .then((x) =>{
                element.id = x.data.id,
                element.types= x.data.types.map(x => x.type.name), 
                element.image= x.data.sprites.front_default, 
                element.gif= [x.data.sprites.versions["generation-v"]["black-white"].animated.front_default, x.data.sprites.versions["generation-v"]["black-white"].animated.back_default],
                element.vida= x.data.stats[0].base_stat,
                element.fuerza= x.data.stats[1].base_stat,
                element.defensa= x.data.stats[2].base_stat,
                element.velocidad= x.data.stats[5].base_stat,
                element.peso= x.data.weight,
                element.altura= x.data.height 
              })))
            cache.set(key, api, 300);
            console.log("setee api cache")
            return api
    }
}

module.exports = {
    duration
}