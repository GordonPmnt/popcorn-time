import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class MovieList extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount = () => {
        this.getMovie();
    }

    getMovie = () => {
        axios.get("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
        .then(res => {
        this.setState({ movies: res.data.movies });
        });
    }
    render(){
        console.log(this.state.movies)
        return(
            <div>
                {this.state.movies.map(movie => <Movie/>)}
            </div>
        )
    }
}
export default MovieList;