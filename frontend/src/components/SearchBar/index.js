import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import './SearchBar.css'

export default function SearchBar() {
    const [searchVal, setSearchVal] = useState('')
    const [inputVal, setInputVal] = useState('')

    const products = useSelector(state => state.products)

    const handleSearch = () => {

    }

    useEffect(() => {
        setSearchVal(inputVal)
    }, [inputVal])

    if (!products) return null
    else return (
        <div className='search__bar-parent'>
            <form className='test-form' action="" onSubmit={handleSearch}>
                <input placeholder="search..." className='test-input' type="search" value={inputVal} onChange={(e => setSearchVal(e.target.value))} />
                <i className="fa fa-search"></i>
            </form>
        </div>
    )

}