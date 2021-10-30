function dbPoke(db){
    
    return db.map(e => ({
            types : e.dataValues.Types.map(x=>x.name),
            id : e.dataValues.id,
            name : e.dataValues.name,
            img: e.dataValues.img,
            vida: e.dataValues.vida,
            fuerza: e.dataValues.fuerza,
            defensa: e.dataValues.defensa,
            velocidad: e.dataValues.velocidad,
            peso: e.dataValues.weight,
            altura: e.dataValues.height
      }))
}

function apiPoke(api){
    return [{
        id: api.id,
        name: api.forms[0].name,
        types: api.types.map(x => x.type.name),
        image: api.sprites.front_default,
        gif: [api.sprites.versions["generation-v"]["black-white"].animated.front_default, api.sprites.versions["generation-v"]["black-white"].animated.back_default],
        vida: api.stats[0].base_stat,
        fuerza: api.stats[1].base_stat,
        defensa: api.stats[2].base_stat,
        velocidad: api.stats[5].base_stat,
        peso: api.weight,
        altura: api.height
      }]

}

function filterBy(array, type){
    return array.filter(x => x.types.includes(type))
}

module.exports = {
    dbPoke,
    apiPoke,
    filterBy
}

//GET 40 POKEMONS API
/*  var api = await axios('https://pokeapi.co/api/v2/pokemon?limit=40').then(response => response.data.results);
    
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
          })
    )) */