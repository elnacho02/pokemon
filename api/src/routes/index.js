const { Router } = require('express');
const { Op } = require('sequelize')
const { conn, Pokemon, Type, PokemonApi} = require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {dbPoke, apiPoke, filterBy} = require('./utils')
const axios = require("axios").default;
const router = Router();
const cache = require('../routeCache')
// Configurar los routers



// Ejemplo: router.use('/auth', authRouter);
router.get('/getTypes/:i', async(req,res)=>{
  let types = await Type.findAll({limit:req.params.i})
  res.send(types)

})

router.post('/createPokemon', async(req,res)=>{
  try {
    const newPok = await Pokemon.create({
      name: req.body.name,
      img: req.body.img,
      vida: req.body.vida,
      fuerza:req.body.fuerza,
      defensa:req.body.defensa,
      velocidad:req.body.velocidad,
      peso:req.body.peso,
      altura:req.body.altura,
    });
    await newPok.addTypes(req.body.types)
    res.json(newPok)
  } catch (error) {
    res.send(error);
  }

})

router.get('/pokemon/:id' , cache(300) , async (req,res)=>{
  var { id } = req.params
  console.log(id)
  if(id){
    if(id.length<5){
      let db = await PokemonApi.findAll({where:{ id: id}})
      if(db.length) return res.json(db)
      
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

router.get('/pokemons' , cache(300), async (req,res)=>{
  //search query
  if(req.query.search){
    var db = await PokemonApi.findAll({where:{name: req.query.search}})
    if(db.length) return res.send(db)
    
    var api = await axios('https://pokeapi.co/api/v2/pokemon/'+req.query.search)
                .then(response => response.data).catch(error => res.send("noResult"))        
    
    res.json(apiPoke(api)) 
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
  
  var dbPokemons = await dbPoke(db)
  var api = await PokemonApi.findAll()
  
  var dbApi = api.concat(dbPokemons)
 

  //filtrado
  if((!req.query.filter || req.query.filter === 'all') && (!req.query.origin || req.query.origin === 'all')) return res.send(dbApi)
 
  //filtro con querys
   if(req.query.filter === 'all' && req.query.origin === 'db')if(dbPokemons.length) return res.json(dbPokemons)
   if(req.query.filter === 'all' && req.query.origin === 'api') return res.send(api)

   if(req.query.filter !== 'all' && req.query.origin === 'all'){
    let s = filterBy(dbApi, req.query.filter)
    if(s.length) return res.send(s)
    else return res.send("noResult")
  }
   if(req.query.filter !== 'all' && req.query.origin === 'db'){
    let s = filterBy(dbPokemons, req.query.filter)
    if(s.length) return res.send(s)
    else return res.send("noResult")
  }
   if(req.query.filter !== 'all' && req.query.origin === 'api'){
    let s = filterBy(api, req.query.filter)
    if(s.length) return res.send(s)
    else return res.send("noResult")
  }
  else return res.send("noResult")
  }
)








module.exports = router;
