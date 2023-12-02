import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import {reducer} from '../../Reducers/reducer'
import {themes} from '../utils/theme'

 

  const ContextGlobal = createContext();

  
  const initialState = {theme: themes.light, info: [], favs: JSON.parse(localStorage.getItem('favs'))|| []}
  

 const ContextProvider = ({ children }) => {
  
  const [state , dispatch] = useReducer(reducer , initialState)
  
    
 
  const handleChangeTheme = () => {
    if (state.theme === themes.dark) {dispatch({type: 'SET_THEME', payload: themes.light}), console.log("cambio a ligth")}
    if (state.theme === themes.light) {dispatch({type: 'SET_THEME', payload: themes.dark}), console.log("cambio a dark")}
  }

 
 
  const url  = "https://jsonplaceholder.typicode.com/users"
 
  
  useEffect(()=>{
    
    axios(url)
    .then(resp =>dispatch({type: 'GET_ODONT', payload: resp.data} ))
   
  },[])

  useEffect(()=>{

    localStorage.setItem('favs', JSON.stringify(state.favs))

    
  },[state.favs])

  

  return (
    <ContextGlobal.Provider value={{state, dispatch, handleChangeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useApiOdont = () => useContext(ContextGlobal)
