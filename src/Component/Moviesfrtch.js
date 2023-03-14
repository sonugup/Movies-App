import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Moviesfrtch = (props) => {
    const {id, Title, Year, imdbID, Type, Poster} =props.el
    console.log(Title)

    const navigate=useNavigate();

  return (
    <div key={id} 
    onClick={() => {
      // let data={ Title, Year, imdbID, Type, Poster};
      localStorage.setItem("selectMovie", JSON.stringify(props.el))
      navigate("/moviesDetels")
    }}
    >
        {/* <Link to={`movies/${id}`} > */}
      <div>
        <img src={Poster} alt="Poster" />
        <h3>{Title} </h3>
        <p>{Year}</p>
        <p>{imdbID}</p>
        <p> {Type} </p>
        </div>
        {/* </Link> */}
    </div>
  )
}

export default Moviesfrtch
