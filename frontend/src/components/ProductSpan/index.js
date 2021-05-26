import { useParams, Link } from 'react-router-dom'

import './Product.css'

export default function Product({ product }) {

    return (

        <span className='product__container' >
            <div id='product__name-container'>
                <Link to={`/all-products/${product.id}`}>
                    {product.product_name}
                </Link>
            </div>
            <img className='product__image-container' style={{ 'max-height': "220px", 'max-width': "220px" }} src={`${product.image_url}`} alt="product" />
            <div className='prices__class' id='product__price-container'>
                Price: ${product.price}
            </div>
            <div className='prices__class' id='product__labor-container'>
                Labor: ${product.labor_estimate}
            </div>

            <div className='prices__class' id='product__total-container'>
                Total: ${product.labor_estimate + product.price}
            </div>
        </span>
    )

}