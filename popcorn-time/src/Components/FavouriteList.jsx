import React from 'react'
import MovieFav from './MovieFav'
import {Link} from 'react-router-dom'

const FavouriteList = ({favMovies, removeFiles}) => {
    const favLength = favMovies.length
    return(
        <>
        {favLength >= 1 && 
        <div className='fav-col'>
            <h1>Favourites films</h1>
            <Link to={{
                pathname: '/info',
                state: {movieList: favMovies}
            }}> Pick a random game </Link>
            <div className="col">
                {favMovies.map(movie => <MovieFav key={movie.id} removeFiles={removeFiles} {...movie}/>)}
            </div>
        </div>}
    </>
    )
}

export default FavouriteList;