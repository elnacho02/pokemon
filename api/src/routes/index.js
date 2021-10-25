const { Router } = require('express');
const { conn, Pokemon, Types} = require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios = require("axios").default;
const router = Router();

// Configurar los routers



// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemon/:id', async (req,res)=>{
  var { id } = req.params
  if(id){
    var db = await Pokemon.findAll({where:{id : id}})
    if(db.length) return res.json(db)
    else {
      var api = await axios('https://pokeapi.co/api/v2/pokemon/'+id)
                .then(response => response.data)        
      return res.json({
        id: api.id,
        name: api.forms[0].name,
        types: api.types,
        img: api.sprites.front_default,
        gif: api.sprites.versions["generation-v"]["black-white"].animated.front_default
      })  
    }
  }  
  
})


router.get('/pokemons', async (req,res)=>{
  if(req.query.search){
    var db = await Pokemon.findAll({where:{name : req.query.search}})
    if(db.length) return res.send(db)
    else {
      var api = await axios('https://pokeapi.co/api/v2/pokemon/'+req.query.search)
                .then(response => response.data)        
      return res.json({
        id: api.id,
        name: api.forms[0].name,
        types: api.types,
        image: api.sprites.front_default,
        gif: api.sprites.versions["generation-v"]["black-white"].animated.front_default
      })  
    }
  }  
  
  var pokemons = await Pokemon.findAll()
    res.json(pokemons)
})



router.get('/databaseTypes', async (req,res)=>{
    var api = await axios('https://pokeapi.co/api/v2/type').then(response => response.data.results);
    
    api.forEach( async x => {
       console.log(x.name, x.url)
         try {
            const newType = await Types.create({
              name: x.name,
              url: x.url
            });
            res.send(newType)
          } catch (error) {
            res.send(error);
          }
    })
})
router.get('/databasePoke', async (req,res)=>{
    var api = await axios('https://pokeapi.co/api/v2/pokemon?limit=40').then(response => response.data.results);
    
    await Promise.all(api.map(async element => 
        {var att = await axios(element.url)
            .then((x) =>({
            types: x.data.types, 
            image: x.data.sprites.front_default, 
            gif: x.data.sprites.versions["generation-v"]["black-white"].animated.front_default}))
        element.data = att}
    ))
    
    api.forEach( async x => {
        try {
            const newPok = await Pokemon.create({
              name: x.name,
              types: x.data.types,
              img: x.data.image,
              gif: x.data.gif
            });
            res.json(newPok);
          } catch (error) {
            res.send(error);
          }
    })
})


module.exports = router;
