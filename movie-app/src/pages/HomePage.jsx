import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import MoviesAPI from "..//components/API/API";
import TvAPI from '../components/API/TvAPI';

import Movislist from '../components/movies/MovisList';
import Searchlist from '../components/movies/SearchList';
import SearchTvlist  from '../components/TV/SearchTvList';
// import SearchTVList from '../components/TV/SearchTVList';
import Tvlist from '../components/TV/TVlist';

const Homepage = () => {
    let [movies,setMovies] = useState([])
    let [query,setQuery] = useState('')
    let [genreMovies,setGenreMovies] = useState(0) 

    let [trendTv , setTrendTv] = useState([])
  let [tvFilter , setFilterTv] = useState([])
  let [filter,setFilter]= useState([])
  let [searchMovie, setSearchMovie] = useState([])
  let [searchTv,setSearchTv] = useState([])
  let [peopleArr,setPeopleArr]= useState([])


  async function  getTrends(params) {
    await MoviesAPI.getTrendMovies(setMovies,setFilter)
    await MoviesAPI.getTrendPeople(setPeopleArr)
 
   await TvAPI.getTrendTvShows(setTrendTv,setFilterTv)

  }
  async function   searchMoviesAndTVShows() {
    await MoviesAPI.searchMovies(query,setSearchMovie)  
    await TvAPI.searchTvShows(query,setSearchTv)  
   }



    useEffect(( )=>{
    if (genreMovies===0) {
      setFilter(movies)
      setFilterTv(trendTv)
      return
    }
   
    let  filtered = movies.filter((item)=>item.genre_ids.includes(genreMovies))
    let  filteredTv = trendTv.filter((item)=>item.genre_ids.includes(genreMovies))

    setFilter(filtered)
    setFilterTv(filteredTv)
   
  },[genreMovies])




  useEffect(()=>{
    getTrends()
 
  },[])

useEffect(()=>{
  searchMoviesAndTVShows()
 
},[query])

    return (
        <motion.div className='home-page'>   
         
        <input type="text" onChange={e=>setQuery(e.target.value)} />  
        {/* <Slider/> */}

{query?<><Searchlist searchMovie={searchMovie} query={query}/> 
<SearchTvlist searchTv={searchTv} query={query}/>
 </>:<></>}



<div className="genres">
<div className="all" onClick={()=>setGenreMovies(28)}>Action</div>
<div className="all" onClick={()=>setGenreMovies(35)}>Comedy</div>
                 <div className="all" onClick={()=>setGenreMovies(0)}>All</div>
                 <div className="all" onClick={()=>setGenreMovies(12)}>Adventure </div>

                
</div>
<Movislist filter={filter}/>

   <Tvlist tvFilter={tvFilter}/>


<div className="items">
<div className="block-name">Trends people</div>
     
              </div>
<div className="movies">
  
                
     {peopleArr.map((e)=>(
           <div className="movie">
                <div className='img'> 
                  <img  src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`} alt="" />
                  <div className="filter"></div>
                  </div>
     <div className='info'>  
      
           <div className='relaese'>{e.known_for_department}</div>
           <div className='name'>{e.name }</div>
           <div className='vote'>Movies :</div>
           <div className='language'>{e.known_for[0].original_title} , {e.known_for[1].original_title} </div>
     </div>
          </div>
           ))}
           
     </div>
          
        </motion.div>
    );
}

export default Homepage;
