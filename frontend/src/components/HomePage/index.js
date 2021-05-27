import { useState, useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/products'


import './HomePage.css'
import Product from '../ProductSpan'

export default function HomePage() {


    const dispatch = useDispatch();

    //! DISPATCH WHEREVER I NEED TO FIND PRODUCTS... will be slower if
    //! DONE IN APP!!!!   MUST REFACTOR

    //!LOGIC BLOCK FOR CONTROLLING REFRESH    
    let products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if (!products) return null
    products = Object.values(products).sort((a, b) => {
        if (a.product_name < b.product_name) {
            return -1
        }
        if (a.product_name > b.product_name) {
            return 1
        }
        return 0
    })
    // console.log('products:', products)
    // let selectProducts = []

    // for (let i = 0; i <= 12; i++) {
    //     let product = products[i];
    //     console.log('product:', product)

    //     if (product.price > 300) { selectProducts.push(product) }
    //     else
    //         i++
    // }
    //!

    return (
        <div className="home__page">

            {/* <h1 className='home__page-tester'>Ellie</h1> */}
            <div className='category__display-container'>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '170px', maxHeight: '170px' }} src='https://turn5.scene7.com/is/image/Turn5/388803?wid=810&hei=608&op_usm=0.8,1,10,0' alt="engine" />
                    <NavLink to='/products/engine'>
                        Engine
                    </NavLink>
                </span>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '170px', maxHeight: '170px' }} src='https://turn5.scene7.com/is/image/Turn5/404140?wid=810&hei=608&op_usm=0.8,1,10,0' alt="exhaust" />
                    <NavLink to='/products/exhaust'>
                        Exhaust
                    </NavLink>
                </span>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '170px', maxHeight: '170px' }} src='https://images.customwheeloffset.com/wheels/ferrada/fr4/fr4_bronzeblack_white.jpg' alt="wheels" />
                    <NavLink to='/products/wheels'>
                        Wheels
                    </NavLink>
                </span>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '170px', maxHeight: '170px' }} src='https://turn5.scene7.com/is/image/Turn5/390364?wid=810&hei=608&op_usm=0.8,1,10,0' alt="suspension" />
                    <NavLink to='/products/suspension'>
                        Suspension
                    </NavLink>
                </span>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '170px', maxHeight: '170px' }} src='https://turn5.scene7.com/is/image/Turn5/405870?wid=810&hei=608&op_usm=0.8,1,10,0' alt="exterior" />
                    <NavLink to='/products/exterior'>
                        Exterior
                    </NavLink>
                </span>

            </div>

            <div className='product__display-container'>
                {products.map(product => (
                    product.price > 1000 && product.price < 2000 &&
                    <Product key={product.id} product={product}>
                        {product.product_name}
                    </Product>

                ))}

            </div>
        </div>
    )

}

