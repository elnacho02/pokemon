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
            peso: e.dataValues.peso,
            altura: e.dataValues.altura
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



    /* router.get('/databaseTypes', async (req,res)=>{
    var api = await axios('https://pokeapi.co/api/v2/type').then(response => response.data.results);
    
    api.forEach( async x => {
       
         try {
            const newType = await Type.create({
              name: x.name,
              url: x.url
            });
            res.send(newType)
          } catch (error) {
            res.send(error);
          }
    })
})
router.get('/databasePokemonTypes', async (req,res)=>{
  var api = await Pokemon.findAll()
  
   api.forEach(async (x)=>{
      res.json(await x.addTypes(x.types));
    })
 

})*/
/* router.get('/databasePoke', async (req,res)=>{
    var api = await axios('https://pokeapi.co/api/v2/pokemon?limit=39&offset=1').then(response => response.data.results);
    
    await Promise.all(api.map(async element => 
        {var att = await axios(element.url)
            .then((x) =>({
            id: x.data.id,
            types: x.data.types.map(x => x.type.name), 
            gif: [x.data.sprites.versions["generation-v"]["black-white"].animated.front_default, x.data.sprites.versions["generation-v"]["black-white"].animated.back_default],
            vida: x.data.stats[0].base_stat,
            fuerza: x.data.stats[1].base_stat,
            defensa: x.data.stats[2].base_stat,
            velocidad: x.data.stats[5].base_stat,
            peso: x.data.weight,
            altura: x.data.height
          }))
        element.data = att}
    ))
      await Promise.all(api.forEach( async x => {
        try {
            const newPok = await PokemonApi.create({
               id: x.data.id, 
              name: x.name,
              types:x.data.types,
              gif: x.data.gif,
              vida: x.data.vida,
              fuerza:x.data.fuerza,
              defensa:x.data.defensa,
              velocidad:x.data.velocidad,
              peso:x.data.peso,
              altura:x.data.altura
            });
            res.json(newPok, "creado");
          } catch (error) {
            res.send(error);
          }
    }) )  
 
     var api1 = await Pokemon.findAll()
    await Promise.all(
         api1.forEach(async(x,i)=>{
            res.json(await x.addTypes(api[i].data.types))
         })
    )  

})   */