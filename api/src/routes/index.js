const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios = require("axios").default;
const router = Router();

// Configurar los routers



// Ejemplo: router.use('/auth', authRouter);


router.get('/pokemons', async (req,res)=>{
    var api = await axios('https://pokeapi.co/api/v2/pokemon?limit=2').then(response => response.data.results);
    
    await Promise.all(api.map(async element => 
        {var att = await axios(element.url)
            .then((x) =>({
            types: x.data.types, 
            image: x.data.sprites.front_default, 
            gif: x.data.sprites.versions["generation-v"]["black-white"].animated.front_default}))
        element.data = att}
    ))
    res.send(api)
})


module.exports = router;
