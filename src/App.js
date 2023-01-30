import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from "./search.svg";

//43f2284b

const API_URL = 'http://www.omdbapi.com?apikey=43f2284b';

// const movie1 = 
//   {
//     "Title": "Man of Steel",
//     "Year": "2013",
//     "imdbID": "tt0770828",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"
// }


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  // const searchLatest = async (year) => {
  //   const response = await fetch(`${API_URL}&s={}`)
  // }
  useEffect(() => {
    searchMovies('');
  }, []); 

  return(
    <div className='app'>
      <h1>MovieErra</h1>

      <div className='search'>
        <input 
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
        ? (
           <div className='container'>
            { movies.map((movie) => (
              <MovieCard movie={movie} />
            ))};
           </div>
          )
          : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )}
     
    </div>
  );
}

export default App;













// export const App = () => {
//   return (
//     <div>
//         <h1>How to code</h1>
//     </div>
//   )
// }
// const jobs = [
//   {id: 1, isActive: true},
//   {id: 2, isActive: true},
//   {id: 3, isActive: false}
// ]

// const activeJobs = jobs.filter((job)=>{return job.isActive})
// console.log(activeJobs)
