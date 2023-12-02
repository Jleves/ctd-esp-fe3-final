import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useApiOdont } from '../Components/utils/global.context'
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  
  const {state} = useApiOdont()  
 
  const {info,theme} = state
  console.log(theme)


 

  return (
    <main style={{background:theme.background}}>
     
      <h1>Home</h1>
      <div className='card-grid'>
        {info.map(item => <Card item={item} key={item.id} />)}
      </div>
    </main>
  )
}

export default Home