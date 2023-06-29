import React, { useEffect, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useSelector } from 'react-redux'
import  axios  from 'axios'
import PokemonList from '../components/pokedex/PokemonList'
import PokemonCard from '../components/pokedex/PokemonCard'

const Pokedex = () => {  

//? array de pokemon antes de filtrar
const [pokemons, setPokemons] = useState([])
//? String para filtrar los pokemons por nombre
const [namePokemon, setNamePokemon] = useState("")
//? Array de tipos de pokemons
const [types, setTypes] = useState([])
//? String para filtrar los pokemons por typo y calmacena tipo actual 
const [currentType, setCurrentType] = useState("")
//? Pagina Actual
const [currentPage, setcurrentPage] = useState(1)
//? estado global donde  se almacena el nombre del usuario
const nameTrainer =  useSelector(store =>store.nameTrainer)

const pokemonsByName = pokemons.filter((pokemon)=>pokemon.name.includes(namePokemon.toLowerCase().trim()))
 
const paginationlogic = () =>{
  // CANTIDAD DE POKEMON POR PAGINA //
  const POKEMON_PER_PAGE = 16
  //pokemon que se van a mostrar en la pagina actual//
  const sliceStart =(currentPage - 1) * POKEMON_PER_PAGE
  const sliceEnd = sliceStart + POKEMON_PER_PAGE
  const pokemonInPage = pokemonsByName.slice(sliceStart, sliceEnd)  ||  1
  //ultima pagina//
  const lastPage =  Math.ceil(pokemonsByName.length / POKEMON_PER_PAGE)
  //Bloque actual //
  const PAGES_PER_BLOCK = 5
  const actualBlock = Math.ceil(currentPage / POKEMON_PER_PAGE)
  //paginas que se van a mostrar en la pagina actual//
  const pagesInBlock = []
  const minPage =(actualBlock - 1) * PAGES_PER_BLOCK + 1 
  const maxPage = actualBlock * PAGES_PER_BLOCK

for(let i = minPage; i <= maxPage; i++){
    if (i <= lastPage) {
      pagesInBlock.push(i) 
    }
  }
  return {pokemonInPage, lastPage, pagesInBlock }
}

const {lastPage, pagesInBlock, pokemonInPage} =  paginationlogic()

const handleClickPreviusPage=()=>{
  const newCurrentPage= currentPage - 1
  if (newCurrentPage >= 1) {
    setCurrentType(newCurrentPage)
  }
}
  
const handleClickNextPage =() => {
  const newCurrentPage = currentPage + 1 
  if (newCurrentPage <= lastPage) {
    setCurrentType(newCurrentPage)
  }
  }


console.log(lastPage, pagesInBlock, pokemonInPage )


const handleSubmit = (e)=> {
  e.preventDefault()
  setNamePokemon(e.target.namePokemon.value)
}

const handleChangeType = (e) => {
  setCurrentType(e.target.value)  
  }

useEffect(()=>{
  if (!currentType) {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281"
    axios.get(URL)
    .then(({data})=> setPokemons(data.results))
    .catch((err)=> console.log(err))    
  }
},[currentType]) 


useEffect(() => {
  const URL ="https://pokeapi.co/api/v2/type"
  axios.get(URL)
  .then(({data})=> setTypes(data.results))
  .catch((err)=> console.log(err))
},[]) 


useEffect(() => {
  if (currentType) {
    const url = `https://pokeapi.co/api/v2/type/${currentType}/`  
    axios
    .get(url)
    .then(({data})=> {
      const pokemonByType =  data.pokemon.map(pokemon => pokemon.pokemon)
    setPokemons(pokemonByType)  
    })
    .catch((err)=> console.log(err))
  }
}, [currentType])


  useEffect(() =>{
    setcurrentPage(1)
  },[namePokemon, currentType ] )


  return (
    <main  className=' max-h-screen' >
      <Header/>

      {/*seccion de filtros y saludos */}

      <section className='py-6 px-2 max grid justify-center items-center   '>
      <h3 className=' text-xl'  >
        <span className='font-extrabold  text-2xl'  >Welcome {nameTrainer}</span>,here you can find your favorite Pokemon </h3>

      
      <form  className="relative w-full  space-y-2.5"   onSubmit={handleSubmit}>
        <div>
          <input  className=" outline-0 block p-2.5 w-full z-20 text-sm text-gray-900 bg-[#f0f2f5] rounded-lg  border-l-2 border"
          id='namePokemon' 
          placeholder='type or name of pokemon '  
          type='text'
          />
          <button className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-600 rounded-r-lg border  focus:ring-4 focus:outline-none " >
            Search
          </button>
          </div>

          <select  className=" outline-0 block p-2.5 w-40 mx-auto z-20 text-sm text-gray-900 bg-[#f0f2f5] rounded-lg  border-l-2 border"

           onChange={handleChangeType} >
            <option value="">  All</option>
            {
              types.map((type)=> (
              <option value={type.name} key={type.url}>
                {type.name}
                </option>
              ))}  
          </select>
        
      </form>
      </section>
      {/*paginacion */}

      <ul className='flex gap-2 justify-center py-4 px-1 flex-wrap '>
        {/*pagina anterior*/}
        <li onClick={() => setcurrentPage(1)}  className='p-2 bg-red-600 font-bold text-white rounded-md cursor-pointer ' >{"<<"} </li>
        {/*pagina anterior*/}
        <li onClick={handleClickPreviusPage}  className='p-2 bg-red-600 font-bold text-white rounded-md cursor-pointer ' >{"<"} </li>
      
        {/*lista de paginas*/}
      {
        pagesInBlock.map(numberPage=> <li onClick={()=>setcurrentPage(numberPage)} className={`p-3 bg-red-600 font-bold text-white rounded-md cursor-pointer ${numberPage === currentPage && "bg-red-400" }  `} key={numberPage} >{numberPage}</li> )
      }


      {/*pagina siguiente */}
      <li onClick={handleClickNextPage}  className='p-2 bg-red-600 font-bold text-white rounded-md cursor-pointer'  >{">"}</li>
      {/*pagina ultima pagina */}
      <li onClick={()=> setcurrentPage(lastPage)}  className='p-2 bg-red-600 font-bold text-white rounded-md cursor-pointer '  >{">>"}</li>


      </ul>    
      {/*seccion de lista de pokemon */}

      <section className='mx-auto  justify-center  items-center p-2 max-w-5xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 lg:gap-8   '>
        {pokemonInPage.map((pokemon)=>(
          <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
        ))}        
      </section>                

    </main>
  )
}
export default Pokedex