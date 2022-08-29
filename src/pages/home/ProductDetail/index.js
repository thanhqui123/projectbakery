import { useState } from 'react'
import '../../../assets/scss/ProductDetail/ProductDetail.scss'
import ProductDetailImage from '../../../components/ProductDetailImage'
import ProductDetailText from '../../../components/ProductDetailText'
import ProductFeatures from '../../../components/ProductFeatures'
import RightHotProduct from '../../../components/RightHotProduct'
import CustomerReview from '../../../components/CustomerReview'
import RelatedProducts from '../../../components/RelatedProducts/RelatedProducts'

const ProductDetail = () => {
    const [detailOption, setDetailOption] = useState('productdetail')
    return (
        <div className="product-detail">
            <div className="product-detail__breadcrump">
                <p className="product-detail__breadcrump--title">
                    Home / Products / <span>2019 Land Rover Range Rover</span>
                </p>
            </div>
            <h2 className="product-detail--title">2019 Land Rover Range Rover</h2>
            <p className="product-detail--day-pricing">
                Starting at <span>£200.00</span> /day
            </p>
            <div className="product-detail__main-container">
                <div className="main-container__product-detail-image">
                    <ProductDetailImage />
                    <div className="product-detail__description">
                        <div className="product-detail__description-option">
                            <ul>
                                <li
                                    onClick={() => setDetailOption('productdetail')}
                                    className={
                                        detailOption == 'productdetail'
                                            ? 'description-option-active'
                                            : ''
                                    }
                                >
                                    Product Detail
                                </li>
                                <li
                                    onClick={() => setDetailOption('features')}
                                    className={
                                        detailOption == 'features'
                                            ? 'description-option-active'
                                            : ''
                                    }
                                >
                                    Features
                                </li>
                                <li
                                    onClick={() => setDetailOption('reviews')}
                                    className={
                                        detailOption == 'reviews' ? 'description-option-active' : ''
                                    }
                                >
                                    Customers reviews
                                </li>
                            </ul>
                            <div className="product-detail__description-content">
                                {detailOption == 'productdetail' && <ProductDetailText />}
                                {detailOption == 'features' && <ProductFeatures />}
                                {detailOption == 'reviews' && <CustomerReview />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-container__right-hot-product">
                    <RightHotProduct />
                </div>
            </div>
            <div className="product-detail__related-product">
                <RelatedProducts />
            </div>
        </div>
    )
}

export default ProductDetail
