import React from 'react'

const getRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

const MovieInfo = ({state}) => {
    const {movieList} = state
    const randomNb = getRandom(movieList.length - 1)
    const movieDisplay = movieList.filter((movie, i) => i === randomNb)
    const {title, actor, plot} = movieDisplay[0]
    return(
        <div>
            <h2>{title}</h2>
            <h3>With {actor}</h3>
            <p>Plot : {plot}</p>
        </div>
    )
}

export default MovieInfo;