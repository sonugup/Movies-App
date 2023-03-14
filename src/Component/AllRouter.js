import React from 'react'
import MoviesDetels from './MoviesDetels';
import MoviesList from './MoviesList';
import { Route, Routes } from "react-router-dom";
const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/moviesDetels" element={<MoviesDetels />} />
      </Routes>
    </div>
  )
}

export default AllRouter;
