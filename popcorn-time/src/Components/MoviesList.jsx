import React from 'react'
import Movie from './Movie'
import GenreSelector from './GenreSelector'

const MoviesList = ({movies, genres, handleFav, getSelection, selection}) => {

        return(
            <div>
                <h1>Movies</h1>
                <GenreSelector genres={genres} getSelection={getSelection} />
                <div className='col'>
                    {movies
                        .filter(movie => 
                            selection.length > 0 
                            ? movie.genres.includes(selection) 
                            : movie)
                        .map(movie => <Movie key={movie.id} handleFav={handleFav} {...movie} />)}
                </div>
            </div>
        )
}

export default MoviesList