import React, { useState, useEffect } from "react";
import axios from "axios";
import Moviesfrtch from "./Moviesfrtch";
import "./movies.css";

const MoviesList = () => {
  const [title, setTitle] = useState();
  const [movie, setMovie] = useState([]);
  const [timeoutId, setTimeoutId] = useState(2000);

  const [loading, setLoading] = useState(true)


  

  const getMovieData = async (query) => {
    const data = await axios.get(
      `https://www.omdbapi.com/?apikey=86497aee&s=${query}`
    );
    setMovie(data.data.Search);
    setLoading(false)
    console.log(data.data.Search)
  };
  const datahenldal = (event) => {
    try {
      clearTimeout(timeoutId);
      setTitle(event.target.value);
      const timeout = setTimeout(() => getMovieData(event.target.value));
      setTimeoutId(timeout);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(movie);
  return (
    <div className="container">
      <nav className="navbar">
        <input
          onChange={datahenldal}
          type="text"
          value={title}
          placeholder="Search Movie"
        />
      </nav>

      <div className="main">

        
        {movie?.length ? movie.map((el, index) => <Moviesfrtch key={index} el={el} />
        ) : (
          <div className="Else">
            <h2> NO SEARCH MOVIE</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
