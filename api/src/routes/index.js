const { Router } = require('express');
const { Op } = require('sequelize')
const { conn, Pokemon, Type, PokemonApi} = require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {dbPoke, apiPoke, filterBy} = require('./utils')
const axios = require("axios").default;
const router = Router();

// Configurar los routers



// Ejemplo: router.use('/auth', authRouter);
router.get('/getTypes/:i', async(req,res)=>{
  let types = await Type.findAll({limit:req.params.i})
  res.send(types)

})

router.post('/createPokemon', async(req,res)=>{
  try {
    const newPok = await Pokemon.create({
      name: "El Marcianito",
      gif: "https://media2.giphy.com/media/YGIpIZjgxL68w/giphy.gif",
      vida: 10,
      fuerza:15,
      defensa:12,
      velocidad:22,
      peso:24,
      altura:23,
    });
    res.json(await newPok.addTypes(["poison"]))
  } catch (error) {
    res.send(error);
  }

})

router.get('/pokemon/:id', async (req,res)=>{
  var { id } = req.params
  console.log(id)
  if(id){
    if(id.length<5){
      let db = await PokemonApi.findAll({where:{ id: id}})
      if(db) return res.json(db)
      
      let api = await axios('https://pokeapi.co/api/v2/pokemon/'+id)
                .then(response => response.data)        
      return res.json(apiPoke(api))
    }
     if(id.length>5){
        var db = await Pokemon.findAll({ where: {id : id},
        include: {
          model: Type,
          attributes: ['name'],
          through: {
            attributes: []
          }
        }})}
        var db1 = dbPoke(db)
      
      db1.length && res.send(db1) 
  }})


router.get('/pokemons', async (req,res)=>{
  //search query
  if(req.query.search){
    var db = await Pokemon.findAll({where:{name : req.query.search}})
    if(db.length) return res.send(db)
    else {
      var api = await axios('https://pokeapi.co/api/v2/pokemon/'+req.query.search)
                .then(response => response.data)        
      return res.json(apiPoke(api))  
    }
  }   
  //traida de datos + get de api en utils
  var db = await Pokemon.findAll({ where: {},
    include: {
      model: Type,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }})
  var dbPokemons = dbPoke(db)
  var api = await PokemonApi.findAll()
  const dbApi = api.concat(dbPokemons)
  
  //filtrado
  if((!req.query.filter || req.query.filter === 'all') && (!req.query.origin || req.query.origin === 'all') ) return res.send(dbApi)
  if(req.query.origin === 'db' && !req.query.filter) return res.send(dbPokemons)
  if(req.query.origin === 'all' && !req.query.filter) return res.send(dbApi)
  else if(req.query.filter){
      if(req.query.origin === 'all' || !req.query.origin){
        let s = filterBy(dbApi, req.query.filter); 
        if(s.length) return res.send(s)
        else return res.send("noResult")
      }
      else if(req.query.origin === 'db'){
        let s = filterBy(filterBy(dbPokemons, req.query.filter))
        if(s.length) return res.send(s)
        else return res.send("noResult")
      }
      
      else if(req.query.origin === 'api') {
        let s = filterBy(api, req.query.filter)
        if(s.length) return res.send(s)
        else return res.send("noResult")
      }
    }
  }
)





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
 

})
router.get('/databasePoke', async (req,res)=>{
    var api = await axios('https://pokeapi.co/api/v2/pokemon?limit=40').then(response => response.data.results);
    
    await Promise.all(api.map(async element => 
        {var att = await axios(element.url)
            .then((x) =>({
            id: x.data.id,
            types: x.data.types.map(x => x.type.name), 
            image: x.data.sprites.front_default, 
            gif: x.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
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
              img: x.data.image,
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

})  */


module.exports = router;
