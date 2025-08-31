const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const  baseUrl = "https://api.themoviedb.org/3";

// fetch trending movies

export const getTrendingMovies = async() =>{
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer .eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjA1ZDMwOTNiN2MxNjU4MGQ4YmE2ZGI4MDQyM2ZlYyIsIm5iZiI6MTY5ODYzMjE5Mi40MjUsInN1YiI6IjY1M2YxMjAwY2M5NjgzMDBhZGU3ODdmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eq44-8kRaJRjbddxPJ9e9gHt5tPp4QO6e5MW42AGkw0`
  }
};

    try{
        const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
        const data = await res.json();
        console.log(data);
        return data.results || [];
    }
    catch(error)
    {
        console.log("error fetching trending movie:",error);
        return []
    }
}

// export function getTrendingMovies()
// {
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer .eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjA1ZDMwOTNiN2MxNjU4MGQ4YmE2ZGI4MDQyM2ZlYyIsIm5iZiI6MTY5ODYzMjE5Mi40MjUsInN1YiI6IjY1M2YxMjAwY2M5NjgzMDBhZGU3ODdmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eq44-8kRaJRjbddxPJ9e9gHt5tPp4QO6e5MW42AGkw0`
//   }
// };

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// }

