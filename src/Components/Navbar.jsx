import React from 'react'
import { Link } from 'react-router-dom'
import {routes} from '../utils/routes'
import {useContextGlobal} from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state,dispatch} = useContextGlobal()

  const changeTheme = () => {
    dispatch({type:'CHANGE-THEME'})
  }

  return (
    <nav className={state.theme_light ? 'light': 'dark'}>
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}><h3> Home </h3></Link>
      <Link to={routes.contact}><h3> Contacto </h3></Link>
      <Link to={routes.favs}><h3> Favoritos </h3></Link> 
    
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme} className='button'>🌙</button>
    </nav>
  )
}

export default Navbar