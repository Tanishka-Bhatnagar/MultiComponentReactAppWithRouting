instructions for react running app

create a folder then
move to project folder
use [ npm create vite@latest myapp ] (for creating new react app)
install npm > using [ npm install ]
start project using [ npm run dev ]

every project have its own [ node_modules/ , package.json ]

useState > it is used to maintain the state of the webpage it stores the changes made to the webpage and display them on the screen

react-router-dom > used for creating routes that means endpoints such as login/

useEffect > used to fetch data from api
npm install axios



app.jsx
import { useState } from 'react'
import './App.css'
import Moviecards from './components/Moviecards'

function App() {

  const [movieName, setMovieName] = useState("");
  const [searchMovie, setSearchMovie] = useState("");

  function handleSearch() {
    setSearchMovie(movieName);
  }

  return (
    <div className='app'>
      <div className="search-container">
        <input type="text" placeholder="enter movie name..." value={movieName} onChange={(e) => setMovieName(e.target.value)}/>
        <button onClick={handleSearch} >  search </button>
      </div>
      <Moviecards user_input={searchMovie}/>
    </div>
  );
}

export default App


moviecards.jsx
import axios from "axios";
import { useEffect, useState } from "react";

function Moviecards({ user_input }) {
    
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    // const url = import.meta.env.VITE_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        if(!user_input) return;

        const fetchMovies = async () => {
            try {
                const res = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${user_input}`);
                setMovies(res.data.Search || []);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, [user_input]);

    async function openMovieDetails(imdbID){
        try{
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
            setSelectedMovie(res.data);
        }
        catch(error){
            console.log(error);
        }
    }

    function closeModal(){
        setSelectedMovie(null);
    }

    return (
        <div>
            <div className="grid grid-cols-4 gap-6">
            {
                movies.map((movie) => (
                    <div className="movie-card" key={movie.imdbID} onClick={()=>openMovieDetails(movie.imdbID)}>
                        <img src={movie.Poster} alt={movie.Title}/>
                        <h3>{movie.Title}</h3>
                    </div>
                ))
            }
            </div>
            {
                selectedMovie && (
                    <div className="modal-overlay">
                        <div className="modal fixed inset-0 flex items-center justify-center p-5 bg-blur">
                            <button onClick={closeModal}>X</button>
                            <img src={selectedMovie.Poster} alt={selectedMovie.Title}/>
                            <h2>{selectedMovie.Title}</h2>
                            <p>
                                <strong>Year:</strong> {selectedMovie.Year}
                            </p>
                            <p>
                                <strong>Director:</strong> {selectedMovie.Director}
                            </p>
                            <p>
                                <strong>Actors:</strong> {selectedMovie.Actors}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Moviecards;
