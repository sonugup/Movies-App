import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const MoviesDetels = () => {

  const [data, setData] = useState([])

  const params=useParams()


  const getData =async () => {
    const data= JSON.parse(localStorage.getItem("selectMovie"))
    setData(data);
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <img src={data.Poster} alt="Poster" />
      <div>
        <h3>{data.Title} </h3>
        <p>{data.Year}</p>
        <p>{data.imdbID}</p>
        <p> {data.Type} </p>
        </div>
    </div>
  )
}

export default MoviesDetels
 