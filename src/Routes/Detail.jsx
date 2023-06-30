import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = 'https://jsonplaceholder.typicode.com/users/'+params.id
  const [detail,setDetail] = useState({})
  const {state} = useContextGlobal()
  
  useEffect(() => {

    axios(url)
    .then(res => setDetail(res.data))
    .catch(err => console.log(err))
}, [url])
  return (
    <div className={state.theme_light ? 'light': 'dark'}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>{detail?.name}</h2>
      
      <h4>Email: {detail.email}</h4>
      <h4>Telefono: {detail.phone}</h4>
  <h4>Website: {detail.website}</h4>
    </div>
  )
}

export default Detail