import React, { useEffect } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const {state} = useContextGlobal()
  return (
    <main className={state.theme_light ? 'light': 'dark'} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
  {state.data.listadoDentistas?.map((odontologo) => (<Card name={odontologo.name} username ={odontologo.username} id={odontologo.id} key={odontologo.id}/>))}
      </div>
    </main>
  )
}

export default Home