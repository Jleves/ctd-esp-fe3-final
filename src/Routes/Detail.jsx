import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import axios from 'axios'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
 const[dentista, setDentista] = useState({})
 const { id } = useParams()
 
 const url ='https://jsonplaceholder.typicode.com/users/'+ id

console.log(url)
 useEffect(()=>{
  
  axios(url)
  .then(resp=> setDentista(resp.data))
 }
 ,[])

 

 
  return (
    
    <div className='card'>
      <h1>Detalle del dentista </h1>
      <img src="../../public/images/doctor.jpg" alt="Doctor photo" />
      {dentista.name}
      {dentista.email}
      {dentista.phone}
      {dentista.website}
     
    </div>
    
  )
}

export default Detail