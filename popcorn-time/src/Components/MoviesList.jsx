import React, { Component } from 'react'
import axios from 'axios'
import Movie from './Movie'

class MoviesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }


    render(){
        const {movies} = this.props
        return(
            <div className='col'>
                <h2>Movie List</h2>
                {movies.map(movie => <Movie key={movie.id} {...movie} />)}
            </div>
        )
    }
}

export default MoviesList