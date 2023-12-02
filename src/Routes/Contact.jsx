import React from 'react'
import Form from '../Components/Form'
import '../index.css'
import { useApiOdont } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

const{state}=useApiOdont()
const {theme}= state

  return (
    <div className='contactDiv'>
      <h2 >Want to know more?</h2>
      <p >Send us your questions and we will contact you</p>
      <Form theme={theme}  className='form'/>
      
    </div>
  )
}

export default Contact