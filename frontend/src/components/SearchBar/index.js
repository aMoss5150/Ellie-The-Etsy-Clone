import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import './SearchBar.css'

export default function SearchBar() {
    const [searchVal, setSearchVal] = useState('')
    const [inputVal, setInputVal] = useState('')

    const products = useSelector(state => state.products)

    useEffect(() => {
        setSearchVal(inputVal)
    }, [inputVal])

    if (!products) return null
    return (
        <div className='search__bar-parent'>


            <form className='test-form' action="">
                <input placeholder="search..." className='test-input' type="search" />
                <i className="fa fa-search"></i>
            </form>




        </div>
    )

}