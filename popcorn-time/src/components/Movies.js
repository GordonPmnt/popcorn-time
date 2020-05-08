import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import Favorite from './Favorite';
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


class Movies extends React.Component {
    state = {
        favorites: [],
        movies: [],
        genres: [],
    }

    componentDidMount = () => {
        axios.get(
            'https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json'
        ).then(
            response => response.data
        ).then(
            result => {
                this.setState({ movies: result.movies })
                this.setState({ genres: result.genres })
            }
        ).catch(error => console.log(error))
    }

    addToFavorite = (id, title) => {
        const { favorites } = this.state;
        const ids = favorites.map(favorite => favorite.id)

        if(!ids.includes(id)) {
            this.setState(prevState => ({ 
                favorites: [
                    ...prevState.favorites,
                    { id, title },
                ]
            }))
        }
    }

    removeFromFavorites = id => {
        this.setState(prevState => ({
            favorites: prevState.favorites.filter(favorite => favorite.id !== id)})
        )
    }        

    render () {
        const { favorites, movies, genres } = this.state;

        return (
            <div>
                <h4>My favorite movies: </h4>
                {
                    favorites.map(favorite => <Favorite 
                            key={favorite.id}
                            removeFromFavorites={this.removeFromFavorites}
                            {...favorite}
                        />
                    )
                }
                {favorites.length > 0 &&
                    <Link 
                        to={`/selection/${favorites[Math.floor(Math.random() * favorites.length)].title}`}
                    >
                        Pick
                    </Link>
                }
                <h4>Movies: </h4>
                <h5>Filter movies:</h5>
                <div style={{ width: '200px' }}>
                    <Dropdown
                        options={genres} 
                        onChange={this._onSelect} 
                        placeholder="Select a genre" 
                    />
                </div>
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