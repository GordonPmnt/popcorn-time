import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import Favorite from './Favorite';


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

    addToFavorite = (id, title) => {
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
                <h4>My favorite movies: </h4>
                {
                    favorites.map(favorite => <Favorite 
                            key={favorite.id}
                            {...favorite}
                        />
                    )
                }
                <h4>Movies: </h4>
                {
                    movies.map(movie => <Movie 
                            key={movie.id}
                            addToFavorite={this.addToFavorite}
                            {...movie} 
                        />
                    )
                }
            </div>
        )
    }
}

export default Movies;