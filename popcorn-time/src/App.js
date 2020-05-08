import React, { Component } from 'react';
import axios from 'axios'
import MoviesList from './Components/MoviesList'
import FavouriteList from './Components/FavouriteList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      favourites: []
    }
  }

  componentDidMount = () => {
    this.getMovies();
  }

  getMovies = () => {
      axios.get('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
      .then(res => res.data)
      .then(data => {
          const {movies} = data
          this.setState({movies})
      })
  }

  handleFav = (currentID) => {
    let {favourites, movies} = this.state;
    const currentMovie = movies.filter(movie => movie.id === currentID);
    movies = movies.filter(movie => movie.id !== currentID);
    favourites.push(currentMovie[0]);
    this.setState({favourites, movies})
  }

  removeFiles = (currentID) => {
    let {favourites, movies} = this.state;
    const selectedMovie = favourites.filter(movie => movie.id === currentID)

    movies.splice(currentID-1, 0, selectedMovie[0])
    favourites = favourites.filter(movie => movie.id !== currentID)

    this.setState({favourites})
  }

  render(){
    const {movies, favourites} = this.state
    return (
      <div className="App">
        <FavouriteList removeFiles={this.removeFiles} favMovies={favourites}/>
        <MoviesList handleFav={this.handleFav} movies={movies} />
      </div>
    );
  }
}

export default App;
