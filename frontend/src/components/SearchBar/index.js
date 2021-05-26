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
        <span className="search__bar-container">
            <input className='search-bar' type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            <option value="hello"></option>
        </span>
    )

}