import React, { Component } from 'react';
import axios from 'axios'
import MoviesList from './Components/MoviesList'
import FavouriteList from './Components/FavouriteList'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import MovieInfo from './Components/MovieInfo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      genres: [],
      favourites: [],
      selection: ""
    }
  }

  componentDidMount = () => {
    this.getMovies();
  }

  getMovies = () => {
      axios.get('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
      .then(res => res.data)
      .then(data => {
          const {movies, genres} = data
          this.setState({movies, genres})
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

  getSelection = (selection) => {
    this.setState({selection})
  }

  render(){
    const { favourites } = this.state
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <>
              <FavouriteList removeFiles={this.removeFiles} favMovies={favourites}/>
              <MoviesList 
                handleFav={this.handleFav}
                getSelection={this.getSelection}
                {...this.state}
              />
            </>
          )} />
          <Route path='/info' render={({location}) => <MovieInfo {...location} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
