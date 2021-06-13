import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import './SearchBar.css'

export default function SearchBar() {
    const [inputVal, setInputVal] = useState('')
    const [matches, setMatches] = useState([])
    const [prodsArr, setProdsArr] = useState([])
    
    
    const products = useSelector(state => state.products)
    
    
    const handleSearch=()=> {
        let possibles = []
        Object.values(products).forEach((product)=> {
            let lengthOfSrch = inputVal.length
            let possMatch = product.product_name.split('').slice(0,lengthOfSrch).join('')
            console.log(possMatch)

            if (possMatch.toLowerCase() === inputVal.toLowerCase() && inputVal.length > 0) {
                possibles.push(product.product_name)
            }
        })

        setMatches(possibles)
        console.log(possibles);
    }
    const searchSubmit = () => {

    }

    useEffect(() => {
        handleSearch()
    }, [inputVal])

    // setProdsArr(Array.from(products))
    if (!products) return null

    else return (
        <div className='search__bar-parent'>
            <form className='test-form' action="" onSubmit={searchSubmit}>
                <input placeholder="search..." className='test-input' type="search" value={inputVal} onChange={(e => setInputVal(e.target.value))} />
                <i className="fa fa-search"></i>
            </form>
        </div>
    )

}