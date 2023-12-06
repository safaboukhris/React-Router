import React from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import './movieCard.css'

const Details = ({movie}) => {
    const navigate = useNavigate();
    const {id}= useParams();
    const selectedMovie = movie.find((m) => m.id.toString() === id);
        if (!selectedMovie) {
            return <div>Movie not found</div>;
        }
    

    return (
        <div>
        <h2 className='selectedTitle'>{selectedMovie.title}</h2>
        <p   className='selectedDescription'>{selectedMovie.description}</p>
        <iframe
            title="trailer"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedMovie.trailer.split('v=')[1]}`}
        ></iframe>
                {/* using hook(usenavigate)  to go back to home page*/}
            <p><button className='buttonBack' onClick={()=>navigate("/")}>Go back</button></p>
        </div>
    )
}

export default Details
