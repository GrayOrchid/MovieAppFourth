import {motion} from 'framer-motion';
import React, {useEffect,useMemo,useState} from 'react';
import MoviesAPI from "..//components/API/API";
import TvAPI from '../components/API/TvAPI';
import Header from '../components/header/Header';
import FavoriteMoviesList from '../components/movies/FavoriteMoviesList';
import Movislist from '../components/movies/MovisList';
import Searchlist from '../components/movies/SearchList';
import Peoplelist from '../components/people/PeopleList';
import FavoriteTvList from '../components/TV/FavoriteTvList';
import SearchTvlist from '../components/TV/SearchTvList';
import Tvlist from '../components/TV/TVlist';
import Burger from '../components/UI/burger/Burger';



const Homepage = ({
	favoriteMovies,
	favoriteTvShows,
	addFavoriteMovie,
	addFavoriteTv,
	removeFavoriteTv,
	removeFavoriteMovie
}) => {

	let [movies, setMovies] = useState([])
	let [query, setQuery] = useState('')
	let [genreMovies, setGenreMovies] = useState(0)
	let [trendTv, setTrendTv] = useState([])
	let [tvFilter, setFilterTv] = useState([])
	let [filter, setFilter] = useState([])
	let [searchMovie, setSearchMovie] = useState([])
	let [searchTv, setSearchTv] = useState([])
	let [peopleArr, setPeopleArr] = useState([])
	let [show, setShow] = useState(false)

	window.addEventListener('scroll', function (e) {

	});

	async function getTrends(params) {
		await MoviesAPI.getTrendMovies(setMovies, setFilter)
		await MoviesAPI.getTrendPeople(setPeopleArr)
		await TvAPI.getTrendTvShows(setTrendTv, setFilterTv)

	}
	async function searchMoviesAndTVShows() {
		await MoviesAPI.searchMovies(query, setSearchMovie)
		await TvAPI.searchTvShows(query, setSearchTv)
	}


	useEffect(() => {
		if (genreMovies === 0) {
			setFilter(movies)
			setFilterTv(trendTv)
			return
		}

		let filtered = movies.filter((item) => item.genre_ids.includes(genreMovies))
		let filteredTv = trendTv.filter((item) => item.genre_ids.includes(genreMovies))

		setFilter(filtered)
		setFilterTv(filteredTv)

	}, [genreMovies])

	useEffect(() => {
		getTrends()
	}, [])

	useEffect(() => {
		searchMoviesAndTVShows()
	}, [query])


    return (
		<motion.div className={show?'home-page scroll-none':'home-page'}>
		<Burger show={show} setShow={setShow} favoriteMovies={favoriteMovies} favoriteTvShows={favoriteTvShows} setGenreMovies={setGenreMovies} />
		<div className="home-container">
		   <Header setShow={setShow} setQuery={setQuery}/>
		   <Searchlist searchMovie={searchMovie} query={query} addFavoriteMovie={addFavoriteMovie}/>
		   <SearchTvlist searchTv={searchTv} query={query}  addFavoriteTv={addFavoriteTv} />
		   <Movislist filter={filter} addFavoriteMovie={addFavoriteMovie} />
		   <Tvlist tvFilter={tvFilter} addFavoriteTv={addFavoriteTv}/>
		   <FavoriteMoviesList favoriteMovies={favoriteMovies} removeFavoriteMovie={removeFavoriteMovie} />
		   <FavoriteTvList favoriteTvShows={favoriteTvShows} removeFavoriteTv={removeFavoriteTv}/>
		   <Peoplelist peopleArr={peopleArr} />
		</div>
		</motion.div>
    );
}

export default Homepage;
