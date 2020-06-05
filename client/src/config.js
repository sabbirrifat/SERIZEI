// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// Read more about the API here: https://developers.themoviedb.org/

//SERVER ROUTES
const USER_SERVER = '/api/users';


const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd157a4c0c49d8680fec022915ac81440';

const SEARCH_BASE_URL = `${API_URL}search/tv?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}tv/popular?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export { 
  SEARCH_BASE_URL, 
  POPULAR_BASE_URL,
  API_URL, API_KEY, 
  IMAGE_BASE_URL, 
  BACKDROP_SIZE,
  USER_SERVER, 
  POSTER_SIZE 
};
