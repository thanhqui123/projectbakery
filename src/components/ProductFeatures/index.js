import { IoIosCheckboxOutline } from 'react-icons/io'
import '../../assets/scss/ProductFeatures/ProductFeatures.scss'

const ProductFeatures = () => {
    return (
        <div className="product-features">
            <div className="product-features-list">
                <p>
                    <IoIosCheckboxOutline
                        size={18}
                        style={{ verticalAlign: '-2px', marginRight: '4px' }}
                    />
                    A/C: Front
                </p>
                <p>
                    <IoIosCheckboxOutline
                        size={18}
                        style={{ verticalAlign: '-2px', marginRight: '4px' }}
                    />
                    A/C: Front
                </p>
                <p>
                    <IoIosCheckboxOutline
                        size={18}
                        style={{ verticalAlign: '-2px', marginRight: '4px' }}
                    />
                    A/C: Front
                </p>
                <p>
                    <IoIosCheckboxOutline
                        size={18}
                        style={{ verticalAlign: '-2px', marginRight: '4px' }}
                    />
                    A/C: Front
                </p>
            </div>
        </div>
    )
}

export default ProductFeatures
