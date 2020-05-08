import React, { Component } from 'react'
import Movie from './Movie'

class MoviesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }


    render(){
        const {movies, handleFav} = this.props
        return(
            <div className='col'>
                {movies.map(movie => <Movie key={movie.id} handleFav={handleFav} {...movie} />)}
            </div>
        )
    }
}

export default MoviesList