const { Router } = require('express');
const { conn, Pokemon, Type} = require("../db")
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
    if(db.length) return res.send(db)
    else {
      var api = await axios('https://pokeapi.co/api/v2/pokemon/'+id)
                .then(response => response.data)        
      return res.json([{
        id: api.id,
        name: api.forms[0].name,
        types: api.types.map(x => x.type.name),
        img: api.sprites.front_default,
        gif: api.sprites.versions["generation-v"]["black-white"].animated.front_default,
        vida: api.stats[0].base_stat,
        fuerza: api.stats[1].base_stat,
        defensa: api.stats[2].base_stat,
        velocidad: api.stats[5].base_stat,
        peso: api.weight,
        altura: api.height
      }])  
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
      return res.json([{
        id: api.id,
        name: api.forms[0].name,
        types: api.types.map(x => x.type.name),
        image: api.sprites.front_default,
        gif: api.sprites.versions["generation-v"]["black-white"].animated.front_default,
        vida: api.stats[0].base_stat,
        fuerza: api.stats[1].base_stat,
        defensa: api.stats[2].base_stat,
        velocidad: api.stats[5].base_stat,
        peso: api.weight,
        altura: api.height
      }])  
    }
  }  
  
  var pokemons = await Pokemon.findAll()
    res.json(pokemons)
})



router.get('/databaseTypes', async (req,res)=>{
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
    
    
     api.forEach( async x => {
        try {
            const newPok = await Pokemon.create({
              id: x.data.id,
              name: x.name,
              types: x.data.types,
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
    }) 
}) 


module.exports = router;
