import React, { useEffect, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useParams } from 'react-router-dom'
import  axios  from 'axios'


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



const PokemonId = () => {

  const{pokemonName} = useParams()

  const percentProgresStat = (baseStat) =>{
    const STATE_MAX = 255
    const STATE_MIN = 1

    
    return  `${(baseStat*100)/255}%`
  }

  const [pokemon, setPokemon] = useState(null)

  console.log(pokemon)

  useEffect(() => {
     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/` 
     
    axios
    .get(url)
    .then(({data})=> setPokemon(data))
    .catch((err) => console.log(err))

  }, [])
  
  return (
    <main>
      <Header/>
     
      <section className='p-2'>
          {/*informacion del pokemon*/}
        <article  className={`max-w-[512px]  text-slate-900 rounded-md p-1 gap-2  border-2  mx-auto ${pokemonLinearGradiendtsBorder[pokemon?.types[0].type.name]} `} >

         <section className='p-2' >
         <section className={`relative h-32 mx-auto  grid justify-center ${pokemonLinearGradiendts[pokemon?.types[0].type.name]}`} >
            <div className='absolute h-12s px-7 -bottom-19 max-w-[260px] mx-auto  '>
            <img  className='mx-auto ' src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name}/>
            </div>
          </section>
          <h3 className='mt-10 inset-y-0 right-0 w-16 '>{pokemon?.name}</h3>
          
          <div className=' flex  items-center justify-center flex-wrap border-2 p-2'>
         
          <div className='' >
          <h2 className='text-center'>tipo</h2>
          <div className=' flex col-span-2 p-2 items-center justify-center mx-8 space-x-4' >
          <h4  className='border-2' >{pokemon?.types[0].type.name}</h4>
          <h4 className='border-2' >{pokemon?.types[1].type.name}</h4>
          </div>
          </div>
          
          <div className=''>
          <h2 className='text-center '>Habilidades</h2>
          <div className=' flex col-span-2 p-2 items-center justify-center mx-8 space-x-4'>
          <h4 className='border-2' >{pokemon?.abilities[0].ability.name}</h4>
          <h4  className='border-2' >{pokemon?.abilities[1].ability.name}</h4>
          </div>
          </div>
          
        
          </div>  

          </section>

          {/*Stats*/}
           <section className="p-2 border-2 mx-8" >
            <h4>Stats</h4>
            <section>
              {
                pokemon?.stats.map((stat)=>(
                   <article key={stat.stat.url}>
                    <section>
                      <h5>{stat.stat.name}</h5>
                      <span>{stat.base_stat}</span>
                    </section>
                    {/*Barra de progreso de stat*/}

                    <section className="bg-gray-500 h-8 rounded-md overflow-hidden" >
                      <div  style={{width: percentProgresStat(stat.base_stat)}}  className={`h-full bg-yellow-500 `} >  
                      </div>
                    </section>
                   
                   </article> 
                ))
              }
            </section>

           </section>


        </article>
      </section>
    </main>
  )
}

export default PokemonId