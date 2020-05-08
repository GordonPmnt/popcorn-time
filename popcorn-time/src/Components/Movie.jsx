import React from 'react'

const Movie = ({title}) => {
    return(
        <div className='movie-card'>
            <p>{title}</p>
            <button>Add to favourite</button>
        </div>
    )
}

export default Movie;