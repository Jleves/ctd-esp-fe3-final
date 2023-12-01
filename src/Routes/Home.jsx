import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useApiOdont } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  
  const {state} = useApiOdont()

  console.log("Primera info en home "  + JSON.stringify(state))
  
  const {info} = state

  useEffect(()=>{},[info])
 
  
  
console.log("LA DATA EN HOME ----------->"  + JSON.stringify(info.data))
  
 

  return (
    <main className="" >
      {console.log("HOME REENDERIZANDO ")}
      <h1>Home</h1>
      <div className='card-grid'>
      {/*info.data.map(item => <Card item = {item} key= {item.id}/>)*/}
        
      </div>
    </main>
  )
}

export default Home