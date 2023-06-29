import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const pokemonLinearGradiendts = {
    grass: 'bg-gradient-to-r from-teal-400 to-yellow-200',
    normal:'bg-gradient-to-r from-pink-500 to-rose-500',
    fighting:'bg-gradient-to-r from-fuchsia-600 to-pink-600',
    flying:'bg-gradient-to-t from-cyan-300 to-slate-200',
    poison:'bg-gradient-to-t from-fuchsia-700 to-fuchsia-500',
    ground:'bg-gradient-to-t from-orange-900 to-orange-300',
    rock:'bg-gradient-to-r from-stone-500 to-stone-700',
    bug:'bg-gradient-to-r from-teal-200 to-teal-500',
    ghost:'bg-gradient-to-r from-slate-900 to-slate-700',
    steel:'bg-gradient-to-r from-blue-600 to-violet-600',
    fire:'bg-gradient-to-r from-rose-400 to-red-500',
    water:'bg-gradient-to-r from-cyan-500 to-blue-500',
    electric:'bg-gradient-to-r from-amber-200 to-yellow-500',
    psychic:'bg-gradient-to-r from-amber-200 to-yellow-400',
    ice:'bg-gradient-to-r from-blue-200 to-cyan-200',
    dragon:'bg-gradient-to-r from-amber-500 to-pink-500',
    dark:'bg-gradient-to-r from-neutral-300 to-stone-400',
    fairy:'bg-gradient-to-r from-violet-200 to-pink-200',
    unknown:'bg-gradient-to-r from-slate-300 to-slate-500',
    shadow:'bg-gradient-to-r from-neutral-300 to-stone-400'
}
const pokemonLinearGradiendtsBorder = {
    grass: 'border-teal-400',
    normal:'border-pink-500 ',
    fighting:'border-fuchsia-600 ',
    flying:'border-cyan-300 ',
    poison:'border-fuchsia-700 ',
    ground:'border-orange-900 ',
    rock:'border-stone-500 ',
    bug:'border-teal-200 ',
    ghost:'border-slate-900 ',
    steel:'border-blue-600 ',
    fire:'border-rose-400 ',
    water:'border-cyan-500 ',
    electric:'border-amber-200 ',
    psychic:'border-amber-400 ',
    ice:'border-blue-200 ',
    dragon:'border-amber-500',
    dark:'border-neutral-300',
    fairy:'border-violet-200',
    unknown:'border-slate-300',
    shadow:'border-neutral-100'
}

const pokemonLinearGradiendtsText = {
    grass: 'text-teal-500',
    normal:'text-pink-600 ',
    fighting:'text-fuchsia-700 ',
    flying:'text-cyan-400 ',
    poison:'text-fuchsia-800 ',
    ground:'text-orange-1000 ',
    rock:'text-stone-600 ',
    bug:'text-teal-300 ',
    ghost:'text-slate-1000 ',
    steel:'text-blue-800 ',
    fire:'text-rose-500 ',
    water:'text-cyan-600 ',
    electric:'text-amber-300 ',
    psychic:'text-amber-300 ',
    ice:'text-blue-300 ',
    dragon:'text-amber-600',
    dark:'text-neutral-400',
    fairy:'text-violet-300',
    unknown:'text-slate-300',
    shadow:'text-neutral-200'
}

const PokemonCard = ({pokemonUrl}) => { 
  
  const [pokemon, setPokemon] = useState(null)
  const formatTypePokemon =(types= [] )=>{

     const nameTypes = types.map((type)=> type.type.name)
     const titleTypes = nameTypes.join(" / ")
     
    return titleTypes
  }

 useEffect( () => {
    axios.get(pokemonUrl)
    .then(({data}) => setPokemon(data))
    .catch((err) => console.log(err))
 }, [])

    return (
    <Link   className={`max-w-[280px]  text-slate-900 rounded-md p-1 gap-2  border-2  mx-auto ${pokemonLinearGradiendtsBorder[pokemon?.types[0].type.name]} `} 
    
    to={`/pokedex/${pokemon?.name}`}  >
        {/* Seccion Superior */}
        <section className={` relative h-32 ${pokemonLinearGradiendts[pokemon?.types[0].type.name]}`} >
            <div className=' absolute px-7 -bottom-19' >
                <img  className=' ' src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name}/>
            </div>
        </section>

        {/*seccion Inferior */}

        <section>

            <h3 className='mt-10'>{pokemon?.name}</h3>
            <h5>{formatTypePokemon(pokemon?.types)} </h5>
            <span>Type</span>
            <hr />
            <section className=' grid grid-cols-2 truncate justify-item ' >
                {/*Generar lista  de Stats */}
                {
                    pokemon?.stats.slice(0,4).map(stat => (
                    <div  className='flex items-center place-items-center'  key={stat.stat.url}>
                        <h6 className={`text-xs text-center ${pokemonLinearGradiendtsText[pokemon?.types[0].type.name]}`}> {stat.stat.name}: </h6>
                        <span className='text-sm flex items-center ' >"{stat.base_stat}"</span>
                    </div>
                    ))
                }
            </section>
        </section>
    </Link>
  )
}

export default PokemonCard