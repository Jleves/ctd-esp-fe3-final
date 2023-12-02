import React from "react";
import card from '../index.css'
import { useApiOdont } from "./utils/global.context";
import { Link } from "react-router-dom";


const Card = ({item}) => {

  const {name, username} = item

  const {state, dispatch} = useApiOdont()

  const{favs} = state

  const findFavs = favs.find((fav) => fav.id == item.id)

  const addFav = ()=>{
    if(findFavs){
      alert('Ya existe el dentista en favoritos')
    } else {
    dispatch({type:'ADD_FAV', payload:item})}
  }

  return (
    <div className={card}>

      <h1>{name}</h1>
      <Link to={'/Detail/'+ item.id}>
      <img src="./../../public/images/doctor.jpg" alt="" />
      </Link>
      <h2>{username}</h2>

      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
