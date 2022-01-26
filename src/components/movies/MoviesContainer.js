import React from 'react';
import MovieCard from './MovieCard';
import movies from '../../movies';
import MovieForm from './MovieForm';

export default class MoviesContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            movies: movies
        }
    }

    addMovie = movie => {
        // newMovies = [...this.state.movies, movie]
        // this.setState((prevState, prevProps) => {
        //     return {
        //         movies: [...prevState.movies, movie]
        //     }
        // })
        this.setState(prevState => ({
            movies: [...prevState.movies, movie]
        }))
    }

    render(){
        return (
            <div className="movie-container">
                <h1>Movie Database</h1>
                <div>
                    <MovieForm addMovie={this.addMovie} />
                </div>
                <br /><br />
                <div>
                    <input type="text" placeholder="Search a movie..." />
                    <button>Go</button>
                </div>
                {this.state.movies.map(m => <MovieCard key={m.id} movie={m} />)}
            </div>
        )
    }
}
