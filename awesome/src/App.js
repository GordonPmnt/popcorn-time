import React from 'react';
import Movie from './components/Movie';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    moviesList: []
  }

  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json`)
      .then(res => {
        console.log(res)
        // const persons = res.data;
        // this.setState({ persons });
      })
  }

  render() {
    return (
       
        <ul>
          { this.state.moviesList.map(movie => <Movie title={movie.title}/>)}
        </ul>
    )
  }
}

