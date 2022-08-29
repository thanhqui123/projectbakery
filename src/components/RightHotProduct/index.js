import '../../assets/scss/RightHotProduct/RightHotProduct.scss'
import { Link } from 'react-router-dom'

const RightHotProduct = () => {
    const hotProducts = [
        {
            id: 1,
            name: 'Rice cooker',
            price: '80',
            image: '/images/Rice-cooker.png',
        },
        {
            id: 2,
            name: 'Air Purifier',
            price: '90',
            image: '/images/Air-Purifier.png',
        },
        {
            id: 3,
            name: 'Electric Kettle',
            price: '120',
            image: '/images/Electric-Kettle.png',
        },
        {
            id: 4,
            name: 'Electric Oven',
            price: '100',
            image: '/images/Electric-oven.png',
        },
        {
            id: 5,
            name: 'Electric Oven',
            price: '100',
            image: '/images/Electric-oven.png',
        },
        {
            id: 6,
            name: 'Electric Oven',
            price: '100',
            image: '/images/Electric-oven.png',
        },
    ]
    return (
        <div className="right-hot-product">
            <p className="right-hot-product--title">Hot products</p>
            <div className="right-hot-product__hot-products">
                {hotProducts.map((hotProduct) => (
                    <div className="hot-products__item">
                        <div className="hot-products__item--image">
                            <Link to="#">
                                <img src={hotProduct.image} />
                            </Link>
                        </div>
                        <div className="hot-products__item-content">
                            <Link
                                style={{ textDecoration: 'none', fontWeight: 500, color: 'black' }}
                                to="#"
                            >
                                <p>{hotProduct.name}</p>
                            </Link>
                            <p style={{ marginTop: '5px' }}>{hotProduct.price}$</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="#" className="right-hot-product--loadmore">
                <p>Load more...</p>
            </Link>
        </div>
    )
}

export default RightHotProduct
