import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const initialState = JSON.parse(localStorage.getItem('state')) || {
  theme_light: true,
  data: {
    listadoDentistas:[],
    favoritos:[]
  }
}

export const ContextGlobal = createContext();

const reducer = (state,action) => {
  switch(action.type){
    case 'GET_LIST':
      return {
        theme_light: state.theme_light,
        data:
          {listadoDentistas:action.payload,
          favoritos: state.data.favoritos}}
    case 'ADD_FAV':
      return {
        theme_light: state.theme_light,
        data:
          {listadoDentistas:state.data.listadoDentistas,
          favoritos: [...state.data.favoritos,action.payload]}}
    case 'DELETE_FAV':
      return {
        theme_light: state.theme_light,
        data:
          {listadoDentistas:state.data.listadoDentistas,
          favoritos: state.data.favoritos.filter((fav) => fav.id !== action.payload)}}
    case 'RESET-FAVS':
      return {
        theme_light: state.theme_light,
        data:
          {listadoDentistas:state.data.listadoDentistas,
          favoritos: []}}
    case 'CHANGE-THEME':
      return {
        theme_light: !state.theme_light,
        data:
          {listadoDentistas:state.data.listadoDentistas,
          favoritos: state.data.favoritos}}
    default:
      throw new Error()

  }
  
  }
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [state,dispatch] = useReducer(reducer,initialState)
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then((res) => dispatch({type:'GET_LIST', payload: res.data}))
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    localStorage.setItem('state',JSON.stringify(state))
    console.log("Se actualizo el LocalStorage")
  },[state])


  return (
    <ContextGlobal.Provider value={{
      state,dispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const useContextGlobal = () => useContext(ContextGlobal)