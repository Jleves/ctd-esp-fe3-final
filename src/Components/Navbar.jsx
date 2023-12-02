import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { useApiOdont } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
 
  const {state, handleChangeTheme}= useApiOdont()
  const {theme}= state
  

 
  


  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to = '/'><h3 style={{color:theme.font}}>Home</h3></Link>
      <Link to ='/Favs'><h3 style={{color:theme.font}}>Favs</h3></Link>
      <Link to = '/Contact'><h3 style={{color:theme.font}} theme={theme}>Contact</h3></Link>
      
      
     <button className='button' onClick={handleChangeTheme}>Change theme</button>
      
    </nav>
  )
}

export default Navbar


