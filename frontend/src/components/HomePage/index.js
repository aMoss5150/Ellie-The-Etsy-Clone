import { useState, useEffect } from 'react'
import { NavLink, useHistory, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, fetchProducts } from '../../store/products'


import './HomePage.css'
import Product from '../ProductSpan'

export default function HomePage() {

    const history = useHistory()
    const dispatch = useDispatch();

    // DISPATCH WHEREVER I NEED TO FIND PRODUCTS... will be slower if
    // DONE IN APP.js
    let products = useSelector(state => state.products.products)

    const handleClick = (dest) => {
        history.push(`/products/${dest}`)
    }

    useEffect(() => {
        dispatch(fetchProducts())
        // dispatch(getProducts())
    }, [dispatch])

    //LOGIC BLOCK FOR CONTROLLING REFRESH    
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

    return (
        <div className="home__page" >

            <div className='category__display-container'>

                <span onClick={() => handleClick("engine")} className='display__nav__span'>
                    <img style={{ borderRadius: '100%', maxWidth: '169px', maxHeight: '200px' }} src='https://turn5.scene7.com/is/image/Turn5/388803?wid=810&hei=608&op_usm=0.8,1,10,0' alt="engine" />
                    <NavLink to='/products/engine'>
                        Engine
                    </NavLink>
                </span>

                <span onClick={() => handleClick("exhaust")} className='display__nav__span'>
                    <img style={{ borderRadius: '100%', maxWidth: '169px', maxHeight: '200px' }} src='https://turn5.scene7.com/is/image/Turn5/404140?wid=810&hei=608&op_usm=0.8,1,10,0' alt="exhaust" />
                    <NavLink to='/products/exhaust'>
                        Exhaust
                    </NavLink>
                </span>

                <span onClick={() => handleClick("wheels")} className='display__nav__span'>
                    <img style={{ borderRadius: '100%', maxWidth: '169px', maxHeight: '200px' }} src='https://images.customwheeloffset.com/wheels/ferrada/fr4/fr4_bronzeblack_white.jpg' alt="wheels" />
                    <NavLink to='/products/wheels'>
                        Wheels
                    </NavLink>
                </span>

                <span onClick={() => handleClick("suspension")} className='display__nav__span'>
                    <img style={{ borderRadius: '100%', maxWidth: '169px', maxHeight: '200px' }} src='https://turn5.scene7.com/is/image/Turn5/390364?wid=810&hei=608&op_usm=0.8,1,10,0' alt="suspension" />
                    <NavLink to='/products/suspension'>
                        Suspension
                    </NavLink>
                </span>

                <span onClick={() => handleClick("exterior")} className='display__nav__span'>
                    <img style={{ borderRadius: '100%', maxWidth: '169px', maxHeight: '200px' }} src='https://turn5.scene7.com/is/image/Turn5/405870?wid=810&hei=608&op_usm=0.8,1,10,0' alt="exterior" />
                    <NavLink to='/products/exterior'>
                        Exterior
                    </NavLink>
                </span>

            </div>

            <div className='product__display-container'>
                {products?.map(product => (
                    product.price > 1000 && product.price < 2000 &&
                    <Product key={product.id} product={product}>
                        {product.product_name}
                    </Product>
                ))}

            </div>
        </div>
    )

}

