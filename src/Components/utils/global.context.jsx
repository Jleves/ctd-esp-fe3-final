import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import {reducer} from '../../Reducers/reducer'
import {dark, light} from '../utils/theme'

 

  const ContextGlobal = createContext();

  
  const initialState = {theme: light, info: [], favs: JSON.parse(localStorage.getItem('favs'))|| []}
  

 const ContextProvider = ({ children }) => {
  
  const [state , dispatch] = useReducer(reducer , initialState)
  console.log("context", state)
    
 
  const changeTheme = (value)=> {dispatch({type: 'SET_THEME', payload: {value}})}
 
  const url  = "https://jsonplaceholder.typicode.com/users"
 
  
  useEffect(()=>{
    
    axios(url)
    .then(resp =>dispatch({type: 'GET_ODONT', payload: resp.data} ))
   
  },[])

  useEffect(()=>{

    localStorage.setItem('favs', JSON.stringify(state.favs))

    
  },[state.favs])

  

  return (
    <ContextGlobal.Provider value={{state, dispatch, changeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useApiOdont = () => useContext(ContextGlobal)
