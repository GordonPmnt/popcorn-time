import React from 'react'
import MovieFav from './MovieFav'

const FavouriteList = ({favMovies, removeFiles}) => {
    return(
        <div className='col'>
            {favMovies.map(movie => <MovieFav key={movie.id} removeFiles={removeFiles} {...movie}/>)}
        </div>
    )
}

export default FavouriteList;