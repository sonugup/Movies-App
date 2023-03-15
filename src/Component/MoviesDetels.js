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
    <div className='main1'>
      <div className='Onebox'> 
      <div className='imgdiv'>
      <img src={data.Poster} alt="Poster" />
      </div>
      
      <div className='catepril'>
        <h3 className='title'>Title: {data.Title} </h3>
        <p className='price' > Year: {data.Year}</p>
        <p> ID: {data.imdbID}</p>
        <p className='des'> Type: {data.Type} </p>
        </div>
      </div>
    </div>
  )
}

export default MoviesDetels
 