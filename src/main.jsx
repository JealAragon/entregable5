import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*//? el use del BrowserRouter se aplica para que el APP menaje rutas dentro de la estructura de React pero este este configurado en el archivo redirects que esta en la carpeta public */}
    <BrowserRouter>
    
    {/* //? en el provider se almacena la estructura  del provierder (estados globales),  */}
    
    
    <Provider store={store}>


    <App />


    </Provider>
    
    
    </BrowserRouter>
   
  
  </React.StrictMode>,
)
