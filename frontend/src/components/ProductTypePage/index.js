import { useParams } from 'react-router-dom'

import Product from '../ProductSpan'

import './ProductTypePage.css'


export default function ProductTypePage({ products }) {
    const { productType } = useParams()
    // products = products.map((product) => {
    //     return (
    //         product.product_type === productType
    //     )
    // })

    if (!products) return (<h1>No product matching TYPE found</h1>)
    return (
        <div className='product__types-container'>
            <h1>product type test</h1>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            {/* {products.map((product) => (
                <Product key={product.id} product={product}/>

                ))}
                
                <img src={product.imagel_url} alt={product.product_name} />
            <h1>test product details page</h1>

            <h2 className='product__name'>{product.product_name}</h2>
            <p className='product__details'>
                {product.product_description}
            </p> */}
        </div>

    )

}