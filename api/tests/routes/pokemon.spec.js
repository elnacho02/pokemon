/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
    it('should get 200 if search',()=>
      agent.get('/pokemons?search=pikachu').expect(200)
    )
    it('should get Pikachu info if search pikachu',()=>
      agent.get('/pokemons?search=pikachu').expect(
        [
          {
            "id": 25,
            "name": "pikachu",
            "types": [
              "electric"
            ],
            "gif": [
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif"
            ],
            "vida": 35,
            "fuerza": 55,
            "defensa": 40,
            "velocidad": 90,
            "peso": 60,
            "altura": 4,
            "actualizado": "2021-10-28T15:29:51.907Z"
          }
        ]
      )
    )
    it('should get 200 if filter origin is db',()=>
      agent.get('/pokemons?filter=all&origin=db').expect(200)
    )
    it('should get 200 if filter origin is api',()=>
      agent.get('/pokemons?filter=all&origin=api').expect(200)
    )
    it('should get 200 if filter by type',()=>
      agent.get('/pokemons?filter=fire&origin=all').expect(200)
    )
    it('should get NoResult if filter by type that doesnt exist in api request',()=>
      agent.get('/pokemons?filter=steel&origin=api').expect('noResult')
    )
    it('should get NoResult if filter by type that doesnt exist in db request',()=>
      agent.get('/pokemons?filter=steel&origin=db').expect('noResult')
    )
  });
});
