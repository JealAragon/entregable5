import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const nameTrainer = useSelector((store) => store.nameTrainer)  

  {/* estamos protegindo el acceso con que el usuario diga  su nombre, ahora lo que es le pornemso el if para darle aaceso y el  navigate para redireccioanr caundo no tiene acceso */}
  
  if(nameTrainer) {
    return < Outlet/>
  }else{
    return <Navigate to="/"/>
  }

  
}

export default ProtectedRoutes