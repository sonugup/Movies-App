import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Moviesfrtch = (props) => {
    const {id, Title, Year, imdbID, Type, Poster} =props.el
    console.log(Title)

    const navigate=useNavigate();

  return (
    <div key={id}
    className="box" 
    onClick={() => { 
      localStorage.setItem("selectMovie", JSON.stringify(props.el))
      navigate("/moviesDetels")
    }}
    >
      <div>
        <img src={Poster} alt="Poster" />
        <h3 className='title'>Title: {Title} </h3>
        
        </div>
    </div>
  )
}

export default Moviesfrtch
