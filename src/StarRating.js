import React from 'react'
import ReactStars from "react-rating-stars-component";

        /* import the component StarRating from react-rating-stars */
const StarRating = ({filtreRate , value}) => {
    const ratingChanged = (newRating) => {
            filtreRate(newRating);
    };
    
        return (
    <div>
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            value = {value}
        />
    </div>
    )
}

export default StarRating
