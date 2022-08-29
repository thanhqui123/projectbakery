import '../../assets/scss/ProductCard/ProductCard.scss'

const ProductCard = ({ name, image, price }) => {
    return (
        <div className="product-card">
            <img src={image} />
            <div className="product-card__content">
                <p className="product-card__content--name">{name}</p>
                <p className="product-card__content--price">
                    <span>{price}$</span>/day
                </p>
            </div>
        </div>
    )
}

export default ProductCard
