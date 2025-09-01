
// you can use api key as well to acess but that's v3 and less secure and your keys   will be expose 
//  this authorization bearer is more secure way ..  prefered in production environment
async  function getTrendingTvShows(time_window)
{
    const options = 
    {
    method: 'GET',
    headers:{
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjA1ZDMwOTNiN2MxNjU4MGQ4YmE2ZGI4MDQyM2ZlYyIsIm5iZiI6MTY5ODYzMjE5Mi40MjUsInN1YiI6IjY1M2YxMjAwY2M5NjgzMDBhZGU3ODdmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eq44-8kRaJRjbddxPJ9e9gHt5tPp4QO6e5MW42AGkw0'
    }
    };

    try
    {
        const res = await fetch(`https://api.themoviedb.org/3/trending/tv/${time_window}?language=en-US`, options); // res will receive a promise
        console.log(res);
        const data = await res.json(); // you  have to wait here as well for the resolution 
        console.log(data);
        return data.results; //  we use .result cause data  is still promise...

    }
    catch(error)
    {
        console.log("ERROR WHILE FETCHING TRENDING TV SHOWS::",error);
        return [];

    }
}

export default getTrendingTvShows;