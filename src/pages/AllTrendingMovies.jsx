import React from 'react'
import { getTrendingMovies } from '../api/trendingMovies';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import MovieList from '../components/MovieList';


function AllTrendingMovies() 
{

// variables
const[movies, setMovies] = useState([]);
const[loadingMovies, setLoadingMovies] = useState(false);
const[page, setPage] =useState(1);
const loaderRef = useRef(null);     

  const scrollData = useRef({
    scrollPos: 0,
    prevMovieCount: 0,
  });
    
// functions
//fetching movies
const fetchMoviesOnScroll = async (page)=>{
setLoadingMovies(true);
const res =  await getTrendingMovies(undefined, page);
setMovies(prev=>[...prev, ...res]); //React calls your updater function with the most recent state value  --updater has access to prev value which can be received  as argument of callback in the updater 
setLoadingMovies(false);
}    

// fetch movies whenver page changes.
useEffect(()=> {
fetchMoviesOnScroll(page);
},[page]);
   



// setup intersection observer
// it take two two inputs first one  a callback and second one options(optional)
const options = 
{
    threshold:0.1
}

useEffect(() => {
const observer = new IntersectionObserver 

// observer is created.
// It starts watching the loader div.
((entries) => {
if (entries[0].isIntersecting && !loadingMovies) // Whenever the loader enters viewport AND loadingMovies is false, it will increment page.
{
  
    // console.log(entries[0]);
    console.log("Page:", page, "Entries:", entries[0]);

    setPage((prev) => prev + 1); // them  moment targeted element intersect with the viewport or root container  loadingMovies is false  it will set the  page to the nexe which cause next api
    // call  due to page varible in the dependency  array of effect hook... 
    //  which will call the function fetchMoviesOnScroll and which change the loadingMovies and causes re-render
    // 
}
                          
}, options);
      


if (loaderRef.current) observer.observe(loaderRef.current);
// entries is an array of IntersectionObserverEntry objects.

// Each entry corresponds to one observed element (that you passed into observer.observe(element) earlier).

// 👉 In your code, you only observe one element (loaderRef.current).
// So entries will always be an array with just one item → entries[0].

return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
};
}, [loadingMovies]);




  return (
    <div className='p-6'>
      <h1 className="text-2xl text-red-600  font-bold mb-4">Trending Movies</h1>
      {/* <ButtonComponent label ="day" value ="day" clickHandler={(val)=>handleClick("movies",val)}/>
      <ButtonComponent label ="week" value ="week" clickHandler={(val)=>handleClick("movies",val)}/> */}
      {/* <ButtonComponent label ="show all"  value = "allTrendingMovies" clickHandler ={(val)=>{navigate(`/${val}`)}} /> */}
      {/* {loadingMovies && <p>Loading Movies...</p>} */}
      {/*  you should prefer conditional rendering  cause you never sure might be result is empty array*/}
      {!loadingMovies && movies.length > 0 && <MovieList movies={movies} />}
      {!loadingMovies && movies.length === 0 && <p>No movies found</p>}
       <div ref={loaderRef} style={{ height: "40px", margin: "20px" }}>
        {loadingMovies && <p>Loading more movies...</p>}
      </div>
    </div>
  )
}

export default AllTrendingMovies
