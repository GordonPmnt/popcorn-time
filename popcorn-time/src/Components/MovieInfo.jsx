import React from 'react'
import { Link } from 'react-router-dom';

const getRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

const MovieInfo = ({state}) => {
    const {movieList} = state
    const randomNb = getRandom(movieList.length - 1)
    const movieDisplay = movieList.filter((movie, i) => i === randomNb)
    const {title, actors, plot} = movieDisplay[0]
    return(
        <div>
            <Link to='/'>Back to the list</Link>
            <div>
                <h2>{title}</h2>
                <h3>With : <span className='actors'>{actors}</span></h3>
                <p>Plot : {plot}</p>
            </div>
        </div>
    )
}

export default MovieInfo;