import { useParams, Link } from 'react-router-dom'

import './Product.css'

export default function Product({ product }) {

    return (

        <span className='product__container' >
            <img className='product__image-container' style={{ 'max-height': "120px", 'max-width': "200px" }} src={`${product.image_url}`} alt="product" />
            <div className='product__name-container'>
                <Link to={`/${product.product_type}/${product.id}`}>
                    {product.product_name}
                </Link>
            </div>
            <div className='product__price-container'>
                New Product Price: ${product.price}
            </div>
            <div className='product__labor-container'>
                Labor Estimate: ${product.labor_estimate}
            </div>
        </span>
    )

}