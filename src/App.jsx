import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtectedRoutes from './components/auth/ProtectedRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='font-["Inter"] min-h-screen '>   
    
     
    
    <Routes>

      {/*//?esta ruta es la que viene desde pages  donde esta actuando como rutas html */}
      <Route path='/' element={<Home/>} />


      {/*estamos anidando estos routes para pader darles proteccion */}
      <Route element={<ProtectedRoutes />} >
      <Route path='/pokedex' element={<Pokedex/> } />
      
      {/*aca estamos utilizando un parametro :id  el usuario que caida en /pokedex va caer en la ruta definida  (parametro en una ruta)*/}
      
      <Route path='/pokedex/:pokemonName' element={<PokemonId />} />

      </Route>


    </Routes>
    </section>
  )
}

export default App
