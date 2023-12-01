import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import {reducer} from '../../Reducers/reducer'

 

  const ContextGlobal = createContext();

  
  const initialState = {theme: "", info: []}
  

 const ContextProvider = ({ children }) => {
  
  const [state , dispatch] = useReducer(reducer , initialState)
  
 
  console.log("soy estado en context "  + JSON.stringify(state))


  const url  = "https://jsonplaceholder.typicode.com/users"
 
  
  useEffect(()=>{
    
    axios(url)
    .then(resp =>dispatch({type: 'GET_ODONT', payload: resp} ))
    console.log("llamado api")
  },[])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useApiOdont = () => useContext(ContextGlobal)
