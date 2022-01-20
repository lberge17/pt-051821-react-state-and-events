import './App.css';

function App() {
  return (
    <div className="movie-container">
      <h1>Movie Database</h1>
      <div>
        <input type="text" placeholder="Search a movie..." />
        <button>Go</button>
      </div>
      <div className="movie-card" id="movie-1">
      <img alt="movie-poster" className="movie-image"/>
        <h3>Movie Name</h3>
        <p>Movie Rating</p>
        <button className="like-bttn">❤️</button>
      </div>
      <div className="movie-card" id="movie-2">
      <img alt="movie-poster" className="movie-image"/>
        <h3>Movie Name</h3>
        <p>Movie Rating</p>
        <button className="like-bttn">❤️</button>
      </div>
      <div className="movie-card" id="movie-3">
      <img alt="movie-poster" className="movie-image"/>
        <h3>Movie Name</h3>
        <p>Movie Rating</p>
        <button className="like-bttn">❤️</button>
      </div>
    </div>
  );
}

export default App;
