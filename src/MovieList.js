import React from 'react'
import MovieCard from './MovieCard'
import './App.css'


const MovieList = ({movie}) => {
            /* mapping our movies in the MovieCard */
return (
    <div className='movie-list'>
        {movie.map((movie)=>(<MovieCard movie={movie}/>)
        )}
    </div>
)
}

export default MovieList
