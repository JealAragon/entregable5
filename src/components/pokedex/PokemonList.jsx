import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemons}) => {
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ' >

      <div>
      {
            pokemons.map((pokemon) => (<PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} /> ))

        }


      </div>

    </section>
  )
}

export default PokemonList