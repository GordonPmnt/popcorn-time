import React, { Component } from 'react';
import axios from 'axios'
import MoviesList from './Components/MoviesList'
import FavouriteList from './Components/FavouriteList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: []
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


  render(){
    const {movies} = this.state
    return (
      <div className="App">
        <MoviesList movies={movies}/>
        <FavouriteList />
      </div>
    );
  }
}

export default App;
