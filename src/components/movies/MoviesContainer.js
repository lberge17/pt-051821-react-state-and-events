import MovieCard from './MovieCard';
import movies from '../../movies';

export default function MoviesContainer() {
    return (
        <div className="movie-container">
            <h1>Movie Database</h1>
            <div>
                <input type="text" placeholder="Search a movie..." />
                <button>Go</button>
            </div>
            {movies.map(m => <MovieCard key={m.id} movie={m} />)}
        </div>
    )
}
