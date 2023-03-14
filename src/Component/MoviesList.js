import React,{useState, useEffect} from 'react'
import axios from "axios"
import Moviesfrtch from './Moviesfrtch'
import "./movies.css"

const MoviesList = () => {

    const [title, setTitle] = useState()
    const [movie, setMovie] =useState([])
    const [timeoutId, setTimeoutId]=useState()


    

    const getMovieData= async (query) => {
        const data= await axios.get(`https://www.omdbapi.com/?apikey=86497aee&s=${query}`)
        setMovie(data.data.Search)
        // console.log(data.data.Search)
    }
    const datahenldal =(event) => {
        try{
          // clearTimeout(timeoutId);
        setTitle(event.target.value);
        const timeout=setTimeout(() => getMovieData(event.target.value))
        setTimeoutId(timeout)
        }catch(e){
          console.log(e)
        }
    }

    console.log(movie)
    // useEffect (() => {
    //     getMovieData()
    // }, [])
  return (
    <div>
      <nav className='navbar'>
      <input onChange={datahenldal} type="text" value={title} placeholder='Search Movie'/>
      </nav>
      

      <div>
        {
            movie.length ? movie.map((el, index) => <Moviesfrtch key={index} el={el} /> ): 
            <div> 
              {/* <h1> Search any Movie</h1>  */}
            <img src='https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-06-18/D1-cde61892-51a8-4a30-8497-fca15c870587.jpg' alt=''/> </div>
            
        }
      </div>
    </div>
  )
}

export default MoviesList
