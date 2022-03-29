import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import MoviesAPI from '../components/API/API';
import './pages.css'

const Moviepage = ({ addFavoriteMovies}) => {
let {movieId} = useParams();
let [movie, setMovie] = useState({});
let [trailer, setTrailer] = useState([])
let [genres, setGenres] = useState([])
let [countries, setCountries] = useState([])
let [similar, setSimilar] = useState([])
let [companies, setComapanies] = useState([])
let [cast, setCast] = useState([])

const youtubeUrl = "https://www.youtube.com/watch?v=";

async function getDeteils(params) {
await MoviesAPI.getMovieTrailer(movieId,setTrailer)
await MoviesAPI.getMovieDetails(movieId,setGenres,setComapanies,setCountries,setMovie)
await MoviesAPI.getMovieCast(movieId,setCast)
await MoviesAPI.getSimilarMovies(movieId,setSimilar)
}

useEffect(() => {
getDeteils()
}, [])

return (
<div className="movie-page" >
   <div className="movie-background">
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}alt="" />
      <div className="blur"></div>
   </div>
   <motion.div className="container" 
     initial={{opacity: 1, scale: 0 }}
   duration={{transition:1}}
            animate={{
            opacity: 1,scale: 1 }}
            transition={{delayChildren: 0.3,
            staggerChildren: 0.2}}
            
            >
      <Link to='/'>
      <h1>BACK</h1>
      </Link>
      <button onClick={()=>addFavoriteMovies(movie)}> ADD</button>
      <div className="movie-info">
         <div className="movie-img">
            <motion.img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            initial={{opacity: 1, scale: 0 }}
            animate={{
            opacity: 1,scale: 1 }}
            transition={{delayChildren: 0.3,
            staggerChildren: 0.2}}
               
            />
         </div>
         <motion.div className="movie-text"
         
         transition={{duration:1}}initial={{opacity:0}}animate={{opacity:1}}
         >
            <div className="movie-title movie-item">{movie.title}</div>
            <div className="movie-item">
               Genres: {genres.map((e,index)=>(
               <div className='item' key={index} >{e.name},</div>
               ))}
            </div>
            <div className="movie-item">
               Status: 
               <div className="item">{movie.status}</div>
            </div>
            <div className="movie-companies movie-item">
               Companies: {companies.map((e,index)=>(
               <div className='item' key={index} >{e.name},</div>
               ))}
            </div>
            <div className="movie-countries movie-item">
               Countries: {countries.map((e,index)=>(
               <div className='item' key={index} >{e.name},</div>
               ))}
            </div>
            <div className="movie-item">
               Budget: 
               <div className="item">{movie.budget}$</div>
            </div>
            <div className="movie-item">
               Vote average: 
               <div className="item">{movie.vote_average}</div>
            </div>
            <div className="movie-overviev movie-item">{movie.overview}</div>
         </motion.div>
      </div>
      <div className="movie-block">
         TRAILERS / TEASERS
         <div className="movie-trailers">
            {trailer.map((e,index)=>(
            <div className='movie-trailer' key={index} >
               <div>{e.name}</div>
               <ReactPlayer width={'100%'} url={youtubeUrl +e.key}controls></ReactPlayer>
            </div>
            ))}
         </div>
      </div>
      <div className="movie-block">
         MOVIE CAST
         <div className="movie-cast">
            {cast.slice(0,10).map((e,index)=>(
            <div className="movie-actor" key={index} >
               <img src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`} alt="" />
               <div>{e.name}</div>
               <div>{e.character}</div>
            </div>
            ))}
         </div>
      </div>
      <div className="movie-block">
         SIMILAR MOVIES
         <div className="similar-movies">
            {similar.map((e,index)=>(
            <div className='similar-movie' key={index} >
               <img
                  src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} />
               <div>{e.original_title}</div>
            </div>
            ))}
         </div>
      </div>
   </motion.div>
</div>

)
}

export default Moviepage;