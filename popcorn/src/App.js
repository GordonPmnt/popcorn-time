import React from 'react';
import './App.css';
import axios from 'axios';
import Movie from './Movie'

const button = {
  color: 'red'
}


class App extends React.Component {
  state = {
    moviesList: []
  }

  componentDidMount(){
    this.getMovies();
  }
  getMovies = () => {
    axios
      .get("https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json")
      .then(res => {
        console.log(res)
        const data = res.data
        console.log(data)
      
        this.setState({
          moviesList: data.movies
        })
      });     
  };

  handleAddFavorite = event => {
    this.setState({
      movies: event.target.value
    })
  }

  render(){
   
    return (
      <div className="App">
        <header className="App-header">
        <button style={button} type="button" onClick={this.handleAddFavorite}>Favorites</button>
         {this.state.moviesList.map((movie) => (
             <Movie  {...movie}/>
          ) )}
         
        </header>
     </div>
   );
 }
}
export default App;
