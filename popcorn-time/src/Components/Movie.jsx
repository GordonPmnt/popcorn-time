import React from 'react'

const Movie = ({title, handleFav, id}) => {
    return(
        <div className='movie-card'>
            <p>{title}</p>
            <button className="btn btn-add" onClick={() => handleFav(id)}> Add to favourite </button>
        </div>
    )
}

export default Movie;