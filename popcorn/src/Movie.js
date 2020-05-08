import React from 'react';

 function Movie(props) {
  return (
    <div>
      <h1>Id:{props.id}</h1>
      <h2>Title: {props.title}</h2>
      <h3> Year: {props.year}</h3> 
      <h4>Runtime: {props.runtime}</h4>  
      <p>Genre: {props.genre}</p> 
      <p>Plot : {props.plot}</p>   
      <p>Director: {props.director}</p>   
      <p>Actors: {props.actor}</p>   
      <img src={props.posterurl} alt={props.name} />    
    </div>
  )
}
export default Movie;