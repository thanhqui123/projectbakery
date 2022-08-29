import '../../assets/scss/RelatedProducts/RelatedProducts.scss'
import ProductCard from '../ProductCard'

const RelatedProducts = () => {
    const relatedProducts = [
        {
            id: 1,
            name: 'Ford transit tribute autotrail',
            price: '125',
            image: '/images/fordtransit.png',
        },
        {
            id: 2,
            name: 'Volkswagen T4 Campervan',
            price: '500.00',
            image: '/images/volkswagen.png',
        },
        {
            id: 3,
            name: 'BMW 525',
            price: '600.00',
            image: '/images/bmw.png',
        },
        {
            id: 4,
            name: 'Landrover range rover velar',
            price: '700.00',
            image: '/images/landrover.png',
        },
    ]
    return (
        <div className="related-product">
            <h2 className="related-product--title">Related Product</h2>
            <div className="related-product__content">
                {relatedProducts.map((relatedProduct) => (
                    <ProductCard
                        image={relatedProduct.image}
                        name={relatedProduct.name}
                        price={relatedProduct.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts
