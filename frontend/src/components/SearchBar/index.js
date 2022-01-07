import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import './SearchBar.css'

export default function SearchBar() {
    const [inputVal, setInputVal] = useState('')
    const [matches, setMatches] = useState([])
    const [prodsArr, setProdsArr] = useState([])


    const products = useSelector(state => state.products.products)
    const handleSearch = () => {
        let possibles = []

        products?.forEach((product) => {
            let lengthOfSrch = inputVal.length
            let possMatch = product.product_name.split('').slice(0, lengthOfSrch).join('')

            if (possMatch.toLowerCase() === inputVal.toLowerCase() && inputVal.length > 0) {
                possibles.push(product)
            }
            else if (product.product_name.toLowerCase().includes(inputVal.toLowerCase()) && inputVal.length) {
                possibles.push(product)
            }
        })
        possibles = possibles.sort((a, b) => { //!sort alphabetically
            if (a.product_name < b.product_name) {
                return -1
            }
            if (a.product_name > b.product_name) {
                return 1
            }
            return 0
        })
        setMatches(possibles)
    }
    // const searchSubmit = (e) => {
    //     e.preventDefault()
    // }

    useEffect(() => {
        handleSearch()
    }, [inputVal])

    // setProdsArr(Array.from(products))
    if (!products) return null

    else return (
        <>
            <div className='search__bar-parent'>
                <form className='test-form' action="" onSubmit={handleSearch}>
                    <input placeholder="search..." className='test-input' type="search" value={inputVal} onChange={(e => setInputVal(e.target.value))} />
                    <i className="fa fa-search"></i>
                </form>
            </div>
            {matches &&
                <>
                    {/* <button onClick={() => setMatches('')}>Clear</button> */}
                    <ul className="search__matches">{matches.map((m) => (
                        <li key={m.id} onClick={() => setInputVal('')}><Link to={`/all-products/${m.id}`}>{m.product_name}</Link></li>
                    ))}</ul>
                </>
            }
        </>
    )

}
