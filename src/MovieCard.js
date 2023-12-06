import React from 'react'
import './movieCard.css';
import StarRating from './StarRating';
import {Link} from 'react-router-dom'

function MovieCard({movie})  {
            /* insert props in our card */
return (
    <div className='main'>
        <div className = "card">
            <img src={movie.poster} alt= "movie poster"/>
            <div className="card-content">
                <h1>
                    {movie.title} 
                    <StarRating  value = {movie.rating}  filtreRate={() => {}}/>
                </h1>
                <p>
                        {/* using Link to navigate to url details */}
                    <Link  className= "Link" to={`/details/${movie.id}`} > DETAILS </Link>
                </p>
            </div>
        </div>
    </div>
)
}

export default MovieCard
