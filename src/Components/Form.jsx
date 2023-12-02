import React, { useState } from "react";
import './../index.css'
import { useApiOdont } from "./utils/global.context";



const Form = ({theme}) => {
  //Aqui deberan implementar el form completo con sus validaciones

  const[data, setData]= useState(
    {
      nombre: '',
      email : ''
    }
  )
 

  const [show, setShow] = useState(false)
  const[error,setError]=useState(false)
  const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(data.nombre.length>3 && emailRegexp.test(data.email) ){
            setShow(true)
            setError(false)
            
        }else {  setShow(false)
                  setError(true)
        }}

  return (
    <div className="Form-cont">
      <form onSubmit={handleSubmit} >
        <input type="text" value={data.nombre} onChange={(e)=>{setData({...data, nombre: e.target.value})}}/>
        <label >Nombre Completo</label>
        <input type="text" value={data.email} onChange={(e)=>{setData({...data, email: e.target.value})}} />
        <label >Email</label>
        <button >Enviar</button>
      </form>
      { show &&
      <h2>Gracias {data.nombre} en la brevedad estaremos comunicandonos al email {data.email}</h2>}
      {error && <h2>Por favor ingrese los datos correctamente</h2>}
    </div>
  );
};

export default Form;
