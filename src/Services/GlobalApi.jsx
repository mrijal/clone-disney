import axios from "axios"

const movieBaseUrl = "https://api.themoviedb.org/3/"
const api_key="f1cf190777884ac3e9cdf7177a133684"
//https://api.themoviedb.org/3/trending/all/day?api_key=f1cf190777884ac3e9cdf7177a133684
const getTrendingVideos = axios.get(movieBaseUrl+"trending/all/day?api_key="+api_key);

export default{getTrendingVideos}