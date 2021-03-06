import { Link, useHistory } from 'react-router-dom'

import { usdFormat, gbpFormat, useCurrency } from '../../context/CurrencyContext'
import { Product } from '../../store/products'
import './Product.css'


interface Props {
    product: Product
}

export default function ProductSpan({ product }: Props) {

    const { currency } = useCurrency()
    const history = useHistory()

    const handleClick = () => {
        history.push(`/all-products/${product.id}`)
    }

    let format = currency === 'usd' ? usdFormat : gbpFormat

    return (

        <span className='product__container' onClick={handleClick} >
            <img className='product__image-container' style={{ maxHeight: "300px", borderRadius: '1px' }} src={`${product.image_url}`} alt="product" />
            <div className='product__info-container'>

                <div id='product__name-container'>
                    <Link to={`/all-products/${product.id}`}>
                        {product.product_name}
                    </Link>
                </div>
                <div className='prices__class' id='product__price-container'>
                    Price: {format(product.price)}
                </div>
                <div className='prices__class' id='product__labor-container'>
                    Labor: {format(product.labor_estimate)}
                </div>

                <div className='prices__class' id='product__total-container'>
                    Total: {format(product.labor_estimate + product.price)}
                </div>

            </div>
        </span>
    )

}