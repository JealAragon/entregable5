import FooterHome from '../components/home/FooterHome'
import { useDispatch } from 'react-redux';
import { setNameTrainer } from '../store/slices/nameTrainer.slice';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  /* se usa para llevar llamar  los slices o(funciones globales ) */
  const dispatch = useDispatch()

  /* se usa para redireccionar la pagina */

  const navigate= useNavigate ()
  /*esta funcion es para llamar  */
 
const handleSubmit = (e) => {
    e.preventDefault()
    const nameTrainer = e.target.nameTrainer.value
    dispatch(setNameTrainer(nameTrainer))
    navigate("/pokedex")
  }


  return (
    <main className='grid grid-rows-[1fr_auto] min-h-screen content-center'>
      <section  className='grid place-content-center p-4' >
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
        <h3 className='text-red-700 text-5xl text-center '  > ¡Hello trainer!</h3>
        <p className='text-center' > For start, give me your name</p>

        <form 
         className="relative w-1/2  mx-auto " 
         onSubmit={handleSubmit}>
          <input 
          className=" outline-0 block p-2.5 w-full z-20 text-sm text-gray-900 bg-[#f0f2f5] rounded-lg  border-l-2 border"
          required id="nameTrainer"
          placeholder='Write your name "Pokemon Master"'
            type="text" />
          <button 
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-600 rounded-r-lg border  focus:ring-4 focus:outline-none "> 
            Start  
          </button>
        </form>  
      </section>  

      <FooterHome/>
    
    </main>
  )
}

export default Home