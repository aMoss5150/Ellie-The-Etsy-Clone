import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './SearchBar.css'

export default function SearchBar() {
    const history = useHistory()
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
        <>
            <span>{searchVal}</span>
            <div className='search__bar-parent'>
                <form className='test-form' action="" onSubmit={handleSearch}>
                    <input placeholder="search..." className='test-input' type="search" value={inputVal} onChange={(e => setInputVal(e.target.value))} />
                    <i className="fa fa-search"></i>
                </form>
            </div>
        </>
    )

}