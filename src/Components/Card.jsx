import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
import { useContextGlobal } from "./utils/global.context";
import '../index.css';


const Card = ({ name, username, id }) => {

  const {state,dispatch} = useContextGlobal()
  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const fav = state.data.listadoDentistas?.find((od) => od.id === id)
    if(!state.data.favoritos.find((od) => od.id === id)){
    dispatch({type:'ADD_FAV',payload:fav})}
    
  }

  return (
    
    <div className="card">
    <Link to={'/dentista/'+id} className="link-card">
    
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
          <img src="./images/doctor.jpg" alt="Foto-doc" className="image-doctor"/>
          <h3>Nombre: {name}</h3>
          <h4>Usuario: {username}</h4>
          <h5>id: {id}</h5>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
      </Link>
      <button onClick={addFav} className="favButton">👍</button>
      {state.data.favoritos?.find((od) => od.id === id) ? 
        <button className="deleteButton" onClick={() => dispatch({type:'DELETE_FAV',payload:id})}>👎</button> :
        <></>
      }
    </div>
  );
};

export default Card;
