import { useState } from 'react'
import '../../assets/scss/ProductDetail/ProductDetailImage.scss'
import clsx from 'clsx'

const ProductDetailImage = () => {
    const [bigImageId, setBigImageId] = useState(0)
    const onChangeBigImage = (imageId) => {
        setBigImageId(imageId)
    }
    const images = [
        '/images/rangerover2.png',
        '/images/rangerover1.png',
        '/images/rangerover3.png',
        '/images/rangerover4.png',
        '/images/G63.png',
        '/images/G63-2.png',
        '/images/G63-2.png',
    ]
    return (
        <div className="product-detail-image">
            <div className="product-detail-image__big-image">
                <div
                    className="product-detail-image__big-image-wrapper"
                    style={{ transform: `translateX(${bigImageId * -100}%)` }}
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} />
                    ))}
                </div>
            </div>
            <div className="product-detail-image__small-image">
                {images.map((image, index) => (
                    <img
                        key={index}
                        style={index % 6 == 0 ? { marginLeft: '0px' } : {}}
                        className={
                            bigImageId === index ? 'product-detail-image__small-image--active' : ''
                        }
                        onClick={() => onChangeBigImage(index)}
                        src={image}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductDetailImage
