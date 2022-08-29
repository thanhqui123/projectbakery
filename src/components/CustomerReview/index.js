import '../../assets/scss/CustomerReview/CustomerReview.scss'
import { AiFillStar } from 'react-icons/ai'
import AddReview from '../AddReview'

const CustomerReview = () => {
    return (
        <div className="customer-review">
            <div className="customer-review-wrapper">
                <div
                    className="customer-review__avatar"
                    style={{
                        background:
                            'url(https://secure.gravatar.com/avatar/8c9f24037448e46aa53d8f14c36beca7?s=120&d=mm&r=g)',
                    }}
                ></div>
                <div className="customer-review__content">
                    <div className="customer-review__content--rating">
                        <AiFillStar size={16} />
                        <AiFillStar size={16} />
                        <AiFillStar size={16} />
                        <AiFillStar size={16} />
                        <AiFillStar size={16} />
                    </div>
                    <p className="customer-review__content--review">This car is very awesome</p>
                </div>
            </div>
            <AddReview />
        </div>
    )
}

export default CustomerReview
