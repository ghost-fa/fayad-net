const APIKEY = "1f9aec4deb459150b45b74317c6bfa43";

const request = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/moive/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,

  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,

  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`
};

export default request;
