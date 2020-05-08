import React from 'react'

const MovieFav = ({title, id, removeFiles}) => {
    return(
        <div className='movie-card'>
            <p>{title}</p>
            <button onClick={() => removeFiles(id)}>Remove from Favourites</button>
        </div>
    )
}

export default MovieFav