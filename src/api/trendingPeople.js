// this time we'll use  API key to access the  lsit of trending People
// this was in v3.. in latest version you are suggested to use read access token via Authorization token || option object;
//https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY

 const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
 const BASE_URL = "https://api.themoviedb.org/3/trending/person/day";


async function getTrendingPeople()
{
    
    try
    {
        const res =  await fetch(`${BASE_URL}?api_key=c205d3093b7c16580d8ba6db80423fec`);
        console.log(res);
        const data =  await res.json();
        console.log(" this is data after res.json() while accessing the trending  people",data);
        return data.results;

    }
    catch(error)
    {
        console.log("ERROR WHILE FETCHING TRENDING PEOPLE", error);
        return [];
    }

}
export  default getTrendingPeople;

// we'll work on this later 