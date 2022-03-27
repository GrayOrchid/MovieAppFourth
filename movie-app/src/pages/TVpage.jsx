import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link ,useParams} from 'react-router-dom';
import TvAPI from '../components/API/TvAPI';
import './pages.css'
const Tvpage = () => {
    

    let { TVId} = useParams();
    let [Tv, setTv] = useState({});
    let [trailer,setTrailer] = useState([])
    let [genres  , setGenres] = useState([])
    let [countries,setCountries] = useState([]) 
    let [companies,setComapanies] = useState([])
    let [cast,setCast] = useState([])
    let [similar,setSmilar] = useState([])
 
 
    const youtubeUrl = "https://www.youtube.com/watch?v=";


    async function getTvDetails(params) {
      await TvAPI.getTv(TVId,setTv,setGenres, setComapanies, setCountries)
      await TvAPI.getTvTrailers(TVId,setTrailer,trailer) 
      await TvAPI.getTvCast(TVId,setCast)
      await TvAPI.getSimilarTv(TVId,setSmilar)
    }
useEffect(()=>{
    getTvDetails()
},[])


    return (
      <div className="movie-page">
      <div className="movie-background">
         <img src={`https://image.tmdb.org/t/p/original/${Tv.backdrop_path}`}alt="" />
         <div className="blur"></div>
      </div>
      <div className="container">
         <Link to='/'>
         <h1>BACK</h1>
         </Link>
         <div className="movie-info">
            <div className="movie-img">
               <motion.img src={`https://image.tmdb.org/t/p/w500/${Tv.poster_path}`}
               initial={{opacity: 1, scale: 0 }}
               animate={{
               opacity: 1,scale: 1 }}
               transition={{delayChildren: 0.3,
               staggerChildren: 0.2}}/>
            </div>
            <motion.div className="movie-text" transition={{duration:1}}initial={{opacity:0}}animate={{opacity:1}}>
               <div className="movie-title movie-item">{Tv.title}</div>
               <div className="movie-item">
                  Genres: {genres.map((e)=>(
                  <div className='item'>{e.name},</div>
                  ))}
               </div>
               <div className="movie-item">
                  Status: 
                  <div className="item">{Tv.status}</div>
               </div>
               <div className="movie-companies movie-item">
                  Companies: {companies.map((e)=>(
                  <div className='item'>{e.name},</div>
                  ))}
               </div>
               <div className="movie-countries movie-item">
                  Countries: {countries.map((e)=>(
                  <div className='item'>{e.name},</div>
                  ))}
               </div>
               <div className="movie-item">
                  Budget: 
                  <div className="item">{Tv.budget}$</div>
               </div>
               <div className="movie-item">
                  Vote average: 
                  <div className="item">{Tv.vote_average}</div>
               </div>
               <div className="movie-overviev movie-item">{Tv.overview}</div>
            </motion.div>
         </div>
         <div className="movie-block">
            TRAILERS / TEASERS
            <div className="movie-trailers">
               {trailer.map((e)=>(
               <div className='movie-trailer'>
                  <div>{e.name}</div>         
                  <ReactPlayer width={'100%'} url={youtubeUrl +e.key}controls></ReactPlayer>
               </div>
               ))}
            </div>
         </div>
         <div className="movie-block">
           CAST
            <div className="movie-cast">
               {cast.slice(0,10).map((e)=>(
               <div className="movie-actor">
                  <img src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`} alt="" />
                  <div>{e.name}</div>
                  <div>{e.character}</div>
               </div>
               ))}
            </div>
         </div>
         <div className="movie-block">
            SIMILAR TVSHOWS
            <div className="similar-movies">
               {similar.map((e)=>(
               <div className='similar-movie'>
                  <img
                     src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} />
                  <div>{e.name}</div>
               </div>
               ))}
            </div>
         </div>
      </div>
   </div>
    );
}

export default Tvpage;
