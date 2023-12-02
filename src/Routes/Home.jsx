import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useApiOdont } from '../Components/utils/global.context'
import body from '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  
  const {state} = useApiOdont()  
  console.log(state)
  const {info} = state


 

  return (
    <main className={body} >
     
      <h1>Home</h1>
      <div className='card-grid'>
        {info.map(item => <Card item={item} key={item.id}/>)}
      </div>
    </main>
  )
}

export default Home