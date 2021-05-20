import { useState, useEffect } from 'react'
import Product from '../Product'


import './HomePage.css'

export default function HomePage() {
    return (
        <div className="home__page">
            <h1 className='home__page-tester'>testHomePage</h1>
            <div className='category__display-container'>
                <span className='display__nav__span'>
                    Exhaust
                </span>

                <span className='display__nav__span'>
                    Engine
                </span>

                <span className='display__nav__span'>
                    Suspension
                </span>

                <span className='display__nav__span'>
                    Exterior
                </span>
            </div>
            <div className='product__display-container'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>



        </div>
    )

}

