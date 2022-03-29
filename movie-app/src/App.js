

import { useEffect, useState } from "react";
import { Route,Routes } from "react-router-dom";



import './index.css'
import Homepage from "./pages/HomePage";
import Moviepage from "./pages/MoviePage";
import Tvpage from "./pages/TVpage";

function App() {
  let saveTvToLocalStorage = (item)=>{
    localStorage.setItem('save-tv-favorites' , JSON.stringify(item))
  }
  let saveMovieToLocalStorage = (item)=>{
    localStorage.setItem('save-movie-favorites' , JSON.stringify(item))
  }
	let [favoriteMovies,setFavoriteMovies] = useState([])
		let [favoriteTvShows,setFavoriteTvShows] = useState([])

		let addFavoriteMovies = (movie)=>{
			let favoriteMoviesList = [...favoriteMovies,movie]
			saveMovieToLocalStorage(favoriteMoviesList)
      setFavoriteMovies(favoriteMoviesList)
		}
    let addFavoriteTv = (TV)=>{
			let favoriteTvList = [...favoriteTvShows,TV]
			setFavoriteTvShows(favoriteTvList)
      saveTvToLocalStorage(favoriteTvList)
   
      
		}
    useEffect(()=>{
      let getFavoriteMovies = JSON.parse(localStorage.getItem('save-movie-favorites'))
      if (getFavoriteMovies) {
        setFavoriteMovies(getFavoriteMovies)
      }
      let getFavoriteTv = JSON.parse(localStorage.getItem('save-tv-favorites'))
      if (getFavoriteTv) {
        setFavoriteTvShows(getFavoriteTv)
      }
    },[])

  return (

    <div className="App">
  
  <Routes>
  
  <Route path="/" element={<Homepage favoriteMovies={favoriteMovies} favoriteTvShows={favoriteTvShows}/>}/>
  <Route path='/movie/:movieId' element={<Moviepage addFavoriteMovies={addFavoriteMovies}/>}/>
  <Route path='TV/:TVId' element={<Tvpage  addFavoriteTv={ addFavoriteTv}/>}/>
</Routes>

</div>



  );
}

export default App;
