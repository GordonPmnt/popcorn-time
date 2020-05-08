import React from 'react'

const Movie = ({title, handleFav, id}) => {
    return(
        <div className='movie-card'>
            <p>{title}</p>
            <button onClick={() => handleFav(id)}> Add to favourite </button>
        </div>
    )
}

export default Movie;