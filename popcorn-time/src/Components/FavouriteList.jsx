import React from 'react'
import MovieFav from './MovieFav'
import {Link} from 'react-router-dom'

const FavouriteList = ({favMovies, removeFiles}) => {
    const favLength = favMovies.length
    return(
        <div className='col'>
            {favLength >= 1 && <Link to={{
                pathname: '/info',
                state: {movieList: favMovies}
            }}> Pick a random game </Link>}
            {favMovies.map(movie => <MovieFav key={movie.id} removeFiles={removeFiles} {...movie}/>)}
        </div>
    )
}

export default FavouriteList;