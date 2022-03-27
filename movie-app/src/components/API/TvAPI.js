import axios from "axios";
let key = "82c0eaa6b4a3e3b9581bcd29c4e1872f";

export default class TvAPI{
	static async getTrendTvShows(setTrendTv,setFilterTv) {
		let response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=ru-RUS&`)
        setTrendTv(response.data.results)
        setFilterTv(response.data.results)
		return response
	}
    
static async searchTvShows(query,setSearchTv){
    let response = await axios.get(` 
    https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${query}`)
    
    if (response.data.results) {
        setSearchTv(response.data.results)
        console.log(response.data.results);
    }
}


    static async getTv(TVId,setTv,setGenres, setComapanies, setCountries){
let response = await axios.get(`https://api.themoviedb.org/3/tv/${TVId}?api_key=${key}&language=en-US`)
let TvData = response.data

if (TvData) {
    setTv(TvData)
}

if (TvData.production_companies) {
    setComapanies(TvData.production_companies)
   }

   if (TvData.production_countries) {
    setCountries(TvData.production_countries)
   }

    setGenres(TvData.genres)
    }

    static async getTvTrailers (TVId,setTrailer){
        let response = await axios.get(`https://api.themoviedb.org/3/tv/${TVId}/videos?api_key=${key}&language=en-US`)
        let trailers = response.data.results
		if (trailers) {
			let trailersFilter = trailers.filter((e) => (e.type === 'Trailer'))
			setTrailer(trailersFilter)   
		}
    }
    static async getTvCast (TVId,setCast){
        let response = await axios.get(`https://api.themoviedb.org/3/tv/${TVId}/credits?api_key=${key}`)
   if (response.data.cast) {
        setCast(response.data.cast)
   }    
    }
    static async getSimilarTv(TVId,setSmilar){
        let response = await axios.get(`https://api.themoviedb.org/3/tv/${TVId}/similar?api_key=${key}&language=en-US&page=1`)
        if (response.data.results) {
         setSmilar(response.data.results)
        }
        
    }
}



