import axios from 'axios';

const API_KEY = '581db6ffc94d7a54214a956facb825d1'
const INIT_PATH_IMAGE = 'http://image.tmdb.org/t/p/';
const INIT_LOGO_SIZE = 'w185';
const INIT_POSTER_SIZE_500 = 'w500';
const INIT_POSTER_SIZE_92 = 'w92';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const DEFAULT_POSTER_PATH = 'https://via.placeholder.com/500';
const DEFAULT_CAST_PATH = 'https://via.placeholder.com/92';

const paramsObj = {
  api_key: API_KEY,
};

const getTrending = async abortController => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/trending/movie/day?${params}`, { signal: abortController.signal });
};

const searchMovies = async (title, abortController) => {
  const paramsObjSearch = {
    ...paramsObj,
    query: title,
  };
  const params = new URLSearchParams(paramsObjSearch);
  return await axios.get(`/search/movie?${params}`, { signal: abortController.signal });
};

const getMovieDetails = async (id, abortController) => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/movie/${id}?${params}`, { signal: abortController.signal });
};

const getMovieCredits = async (id, abortController) => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/movie/${id}/credits?${params}`, { signal: abortController.signal });
};

const getMovieReviews = async (id, abortController) => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/movie/${id}/reviews?${params}`, { signal: abortController.signal });
};

const getConfiguration = async () => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/configuration?${params}`);
};

export {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  getConfiguration,
  INIT_PATH_IMAGE,
  INIT_LOGO_SIZE,
  INIT_POSTER_SIZE_500,
  INIT_POSTER_SIZE_92,
  DEFAULT_POSTER_PATH,
  DEFAULT_CAST_PATH,
};