import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul>
        <li><Link to = "/home">Home</Link></li>
        <li><Link to = "/contact">Contact</Link></li>
        <li><Link to = "/favs">Favs</Link></li>
      </ul>      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar