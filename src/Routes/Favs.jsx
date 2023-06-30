import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const {state,dispatch} = useContextGlobal()
  

  const deleteFav = (id)=>{
    const fav = state.data.listadoDentistas?.find((od) => od.id === id)
    console.log(fav)
    if(state.data.favoritos.find((od) => od.id === id)){
    dispatch({type:'DELETE_FAV',payload:fav.id})}
    
  }

  return (
    <div className={state.theme_light ? 'light': 'dark'}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
                {/* este componente debe consumir los destacados del localStorage */}
                {/* Deberan renderizar una Card por cada uno de ellos */}
        
        {state.data.favoritos?.map((odontologo) => (
          <Card name={odontologo.name} username ={odontologo.username} id={odontologo.id} key={odontologo.id} />
        ))}
      </div>
      <button onClick={() => dispatch({type:'RESET-FAVS'})} className='button-reset'>Limpiar Favs</button>
    </div>
  );
};

export default Favs;
