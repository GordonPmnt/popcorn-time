import React from 'react';
import axios from 'axios';
import Movie from './Movie';


class Movies extends React.Component {
    state = {
        favorites: [],
        movies: [],
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

    addFavorite = (id, title) => {
        this.setState(prevState => ({ 
            favorites: [
                ...prevState.favorites,
                { id, title },
            ]
        }))
    }

    render () {
        const { favorites, movies } = this.state;
        return (
            <div>
                <h4>Movies: </h4>
                {
                    movies.map(movie => <Movie 
                            key={movie.id}
                            handleClick={this.handleClick}
                            {...movie} 
                        />
                    )
                }
            </div>
        )
    }
}

export default Movies;