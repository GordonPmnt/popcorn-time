import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import Favorite from './Favorite';
import { Link } from "react-router-dom";


class Movies extends React.Component {
    state = {
        favorites: [],
        movies: [],
        genres: [],
        selectedGenre: '',
    }

    styles = {
        container: {
            margin: '2% 5% 5% 5%',
        },
        favorites: {
            borderRadius: '10px',
            background: '#26282B',
            boxShadow: 'inset 5px 5px 10px #1d1e20, inset -5px -5px 10px #303236',
            padding: '2% 5% 5% 5%',
            width: '100%',
            height: '150px',
            overflow: 'scroll',
        }
    }

    componentDidMount = () => {
        axios.get(
            'https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json'
        ).then(
            response => response.data
        ).then(
            result => {
                let { genres, movies } = result
                movies = movies.map(movie => {
                    movie.favorite = false
                    return movie
                })
                console.log(movies)
                this.setState({ genres, movies })
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
                ],
                movies: prevState.movies.map(movie => {
                    if(movie.id === id) {
                        return { ...movie, favorite: true }
                    }
                    return movie
                })
            }))
        }
    }

    removeFromFavorites = id => {
        this.setState(prevState => ({
            favorites: prevState.favorites.filter(favorite => favorite.id !== id),
            movies: prevState.movies.map(movie => {
                if(movie.id === id) {
                    return { ...movie, favorite: false }
                }
                return movie
            })
        }))
    }
    
    handleGenreSelection = event => {
        this.setState({ selectedGenre: event.target.value })
    }

    render () {
        const { favorites, movies, genres, selectedGenre } = this.state;

        return (
            <div style={this.styles.container}>
                <h3>My favorite movies: </h3>
                {favorites.length > 0
                    ?
                        <Link
                            to={`/selection/${favorites[Math.floor(Math.random() * favorites.length)].title}`}
                        >
                            <p style={{ color: '#ff8300' }} >Pick</p>
                        </Link>
                    : 
                        <p>Pick</p>
                }
                <div style={this.styles.favorites}>
                {
                    favorites.map(favorite => <Favorite 
                            key={favorite.id}
                            removeFromFavorites={this.removeFromFavorites}
                            {...favorite}
                        />
                    )
                }

                </div>
                <div>
                    <h3>Movies: </h3>
                    <div style={{ width: '200px' }}>
                        <label for="genre">Choose a genre:</label>
                            <select onChange={event => this.handleGenreSelection(event)} id="genre">
                                {genres.map(genre => 
                                    <option
                                        key={genre} 
                                        value={genre}
                                    >
                                        {genre}
                                    </option>)
                                }
                            </select>
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {
                        movies
                            .filter(movie => selectedGenre ? movie.genres.includes(selectedGenre) : movie)
                            .map(movie => <Movie 
                                key={movie.id}
                                addToFavorite={this.addToFavorite}
                                removeFromFavorites={this.removeFromFavorites}
                                {...movie} 
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Movies;