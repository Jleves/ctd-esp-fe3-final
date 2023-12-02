import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../index.css"

import axios from 'axios'
import { useApiOdont } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
 const[dentista, setDentista] = useState({})
 const { id } = useParams()
 const {state}=useApiOdont()
 const {theme}= state
 
 const url ='https://jsonplaceholder.typicode.com/users/'+ id


 useEffect(()=>{
  
  axios(url)
  .then(resp=> setDentista(resp.data))
 }
 ,[])

 

 
  return (
    
    <div style={{background:theme.background}} className='detail'>
      <h1 style={{color:theme.font}}>Detalle del dentista </h1>
      <img src="../../public/images/doctor.jpg" alt="" className='td'/>
       <p style={{color:theme.font}}>Nombre: {dentista.name}</p>
      <p style={{color:theme.font}}>Email: {dentista.email}</p>
      <p style={{color:theme.font}}>Telefono: {dentista.phone}</p>
      <p style={{color:theme.font}}>WebSite: {dentista.website}</p>
      
      
      
     
    </div>
    
  )
}

export default Detail