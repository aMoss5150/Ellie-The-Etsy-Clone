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
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if (!products) return null

    //!

    return (
        <div className="home__page">

            <h1 className='home__page-tester'>Ellie</h1>
            <div className='category__display-container'>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '150px', maxHeight: '150px' }} src='https://turn5.scene7.com/is/image/Turn5/388803?wid=810&hei=608&op_usm=0.8,1,10,0' alt="" />
                    <NavLink to='/products/engine'>
                        Engine
                    </NavLink>
                </span>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '150px', maxHeight: '150px' }} src='https://turn5.scene7.com/is/image/Turn5/404140?wid=810&hei=608&op_usm=0.8,1,10,0' alt="" />
                    <NavLink to='/products/exhaust'>
                        Exhaust
                    </NavLink>
                </span>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '150px', maxHeight: '150px' }} src='https://images.customwheeloffset.com/wheels/ferrada/fr4/fr4_bronzeblack_white.jpg' alt="" />
                    <NavLink to='/products/wheels'>
                        Wheels
                    </NavLink>
                </span>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '150px', maxHeight: '150px' }} src='https://turn5.scene7.com/is/image/Turn5/390364?wid=810&hei=608&op_usm=0.8,1,10,0' alt="" />
                    <NavLink to='/products/suspension'>
                        Suspension
                    </NavLink>
                </span>

                <span className='display__nav__span'>
                    <img style={{ borderRadius: '50%', maxWidth: '150px', maxHeight: '150px' }} src='https://turn5.scene7.com/is/image/Turn5/405870?wid=810&hei=608&op_usm=0.8,1,10,0' alt="" />
                    <NavLink to='/products/exterior'>
                        Exterior
                    </NavLink>
                </span>

            </div>

            <div className='product__display-container'>
                {Object.values(products).map(product => (
                    <Product key={product.id} product={product}>
                        {product.product_name}
                    </Product>

                ))}

            </div>
        </div>
    )

}

