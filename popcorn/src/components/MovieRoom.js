import React from "react";
import axios from 'axios';
import Movie from './Movie';

class MovieRoom extends React.Component {
    state ={
        genre: [],
        movies: [
            {
                id: '',
                title: '',
                year: '',
                runtime: '',
                genres: [],
                director: '',
                actors: '',
                plot: '',
                posterUrl: '',
                isFavourite: false,
            }
        ]
    }

    displayMovies = () => {
          
        axios
          .get('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json', {
            method: 'get',
            })
            .then(res => {
                console.log(res.data)
                this.setState({movies: res.data.movies})
            })
            .catch(err => {
                console.log(err.message)
            })
        }

    addToFavourite= () => {
        this.setState(prevState => ({
            isFavourite: !prevState.isFavourite
        }))
        }
        
    
    componentDidMount () {
        this.displayMovies()
    }


    render () {
        return (
            <div>
                <h1>ALL MOVIES</h1>
                <table>
                        {this.state.movies.map(movie => 
                        <Movie movieDescr={movie} addToFavourite={this.addToFavourite} /> 
                        )}
                </table>
                <h1>FAVOURITE MOVIES</h1>
                <table>
                        {this.state.movies.isFavourite && <td>{this.state.movies.title}</td> }
                </table>
            </div>
        )
    }
}

export default MovieRoom;
