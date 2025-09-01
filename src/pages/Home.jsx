import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/trendingMovies";
import MovieList from "../components/MovieList";
import getTrendingTvShows from "../api/trendingTvShow";
import ButtonComponent from "../components/button";
// import getTrendingPeople from '../api/trendingPeople'

function Home() {

  const[movies, setMovies] = useState([]);
  const[loadingMovies, setLoadingMovies] = useState(false);
  const[tvShows, setTvShows] =useState([]);
  const[loadingTvShows, setLoadinTvShows] = useState([]);
  

// it will make calls on the basis of user choice of time period
 const handleClick = async (type , time_window)=>
  {
      if(type==="movies")
      { 
        setLoadingMovies(true);
        const data = await getTrendingMovies(time_window);
        setMovies(data);
        setLoadingMovies(false);
      }
      if(type==="tvShows")
      { 
        setLoadinTvShows(true);
        const data = await getTrendingTvShows(time_window);
        setTvShows(data);
        setLoadinTvShows(false);
      }
  };

// Fetch trending movies when page loads
  useEffect(
    () => {const loadTrendingMovies = async () => 
      {
      setLoadingMovies(true);
      const data = await getTrendingMovies("day");
      setMovies(data);
      setLoadingMovies(false);
      };
    loadTrendingMovies();
  }, []);

  // fetch the trending TV shows .. when page loads
  useEffect(
    
    ()=>{async function loadTrendingTvShows()
    {
      setLoadinTvShows(true);
      const dataTvShows = await getTrendingTvShows("day");
      setTvShows(dataTvShows);
      setLoadinTvShows(false);
    };
    loadTrendingTvShows(); 
  },[]);

 

  return (
    <div className="p-6">
      <h1 className="text-2xl text-red-600  font-bold mb-4">Trending Movies</h1>
      <ButtonComponent label ="day" value ="day" clickHandler={(val)=>handleClick("movies",val)}/>
      <ButtonComponent label ="week" value ="week" clickHandler={(val)=>handleClick("movies",val)}/>
      {loadingMovies && <p>Loading Movies...</p>}
      {/*  you should prefer conditional rendering  cause you never sure might be result is empty array*/}
      {!loadingMovies && movies.length > 0 && <MovieList movies={movies} />}
      {!loadingMovies && movies.length === 0 && <p>No movies found</p>}

      <h1 className ="text-2xl text-red-600 font-bold mb-4">Trending tv shows</h1>
       <ButtonComponent label ="day" value ="day" clickHandler={(val)=>handleClick("tvShows",val)}/>
      <ButtonComponent label ="week" value ="week" clickHandler={(val)=>handleClick("tvShows",val)}/>
      {loadingTvShows && <p>Loading Tv shows...</p>}
      {/*  conditional rendering */}
      {!loadingTvShows && tvShows.length>0  && <MovieList movies ={tvShows}/>}
      {!loadingTvShows && tvShows.length==0  && <p> No  Tv shows found..</p>}

     
      

    </div>
  );
}

export default Home;
