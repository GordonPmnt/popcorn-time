import React from 'react';
import axios from 'axios';
import Movie from './Movie';


class Movies extends React.Component {
    state = {
        movies: []
    }

    componentDidMount = () => {
        axios.get(
            'https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json'
        ).then(
            response => response.data
        ).then(
            result => this.setState({ movies: result.movies })
        ).catch(error => console.log(error))
    }

    render () {
        const { movies } = this.state;
        return (
            <div>
                {
                    movies.map(movie => <Movie key={movie.id} {...movie} />)
                }
            </div>
        )
    }
}

export default Movies;