import '../../assets/scss/AddReview/AddReview.scss'
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'
import { Checkbox } from '@mui/material'

const AddReview = () => {
    const [rating, setRating] = useState(0) // initial rating value
    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div className="add-review">
            <p className="add-review--title">Add Review</p>
            <div className="add-review--divider"></div>
            <div className="add-review__form">
                <p className="add-review__form--commit">
                    Your email address will not be published. Required fields are marked *
                </p>
                <div className="add-review__form-rating">
                    <p className="add-review__form-rating--label">Your rating *</p>
                    <Rating
                        size={20}
                        style={{ marginTop: '8px' }}
                        onClick={handleRating}
                        ratingValue={rating}
                    />
                </div>
            </div>
            <div className="add-review__form-text-area">
                <p className="add-review__form-text-area--label">Your review *</p>
                <textarea></textarea>
            </div>
            <div className="add-review__form-name-and-email">
                <div className="add-review__form-name">
                    <p className="add-review__form-name--label">Name *</p>
                    <input type="text" />
                </div>
                <div className="add-review__form-email">
                    <p className="add-review__form-email--label">Label *</p>
                    <input type="text" />
                </div>
            </div>
            <div className="add-review__save-name-and-email">
                <Checkbox color="warning" style={{ verticalAlign: '-6px' }} />
                <span>
                    Save my name, email, and website in this browser for the next time I comment.
                </span>
            </div>
            <div className="add-review__button-submit-wrapper">
                <div className="add-review__button-submit">
                    <span>Submit</span>
                </div>
            </div>
        </div>
    )
}

export default AddReview
