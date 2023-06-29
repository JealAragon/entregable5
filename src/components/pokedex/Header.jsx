import React from 'react'
import { setNameTrainer } from '../../store/slices/nameTrainer.slice'
import { useDispatch } from 'react-redux'



const Header = () => {
  const dispatch =useDispatch()
  const handleClicklogout = () => {
    dispatch(setNameTrainer(""))
  }
  



  return (
    <section className='relative'> 
    {/*Seccion roja */}
    <div className='bg-red-600 h-20 relative'>
        <div className=' absolute left-0 botto,-0 w-[200px]  xxs:w-[300px] sm:w-[400px] ' >
        <img className='w-[400px]'   src="/images/logo.png" alt="" />
        </div>
        
    </div>
    {/* Seccion negra*/}
    <div className='bg-black h-12'></div>

    {/*Seccion pokeball*/}

    <div className='h-20 aspect-square bg-white border-[10px]  border-black rounded-full absolute -bottom-3 right-0 -translate-x-1/2 after:contents[""] after:h-12 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px] after:border-black'>

      <button onClick={handleClicklogout} className='absolute left-1/2 top-1/2 text-white z-20 -translate-x-1/2 -translate-y-1/2 '>X</button>

    </div>


</section>
  )
}

export default Header