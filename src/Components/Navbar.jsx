import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to = '/'><h3>Home</h3></Link>
      <Link to ='/Favs'><h3>Favs</h3></Link>
      <Link to = '/Contact'><h3>Contact</h3></Link>
      
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar