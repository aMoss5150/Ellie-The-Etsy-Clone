import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Link, useHistory } from 'react-router-dom'
import './MiniCart.css'
import { useView } from '../../context/ViewCartContext'
import { getProducts } from '../../store/products'
import { getCartLS } from '../../store/cart'



function MiniCart() {
    const dispatch = useAppDispatch();
    const history = useHistory()
    const { cartOpen, setCartOpen } = useView()

    interface Product {
        id: number
        product_name: string
        labor_estimate: number
        image_url: string
        product_type: string
        product_description: string
    }

    // product_name: "Stainless Power 1-7/8-Inch Long Tube Headers; Catted",
    //     price: 1250,
    //         labor_estimate: 500,
    //             image_url: "https://turn5.scene7.com/is/image/Turn5/390796-A?wid=810&hei=608&op_usm=0.8,1,10,0",
    //                 product_type: 'exhaust',
    //                     product_description: 'Stainless Power Headers are manufactured to Stainless Works exact design specifications. Stainless Power Headers are CNC mandrel bent from 1-7/8" diameter, 304 stainless steel tubing for excellent exhaust flow and long lasting corrosion resistance.These Long Tube Headers feature TIG welded construction, as well as laser cut 3/8" header flanges for additional strength and leak-free performance.',


    const cart = useAppSelector(state => state.cart)
    const products = useAppSelector(state => state.products.products)
    let allCartItems: Array<Product> = []

    for (let i = 0; i <= cart.length; i++) {
        let itemNum = cart[i]
        let selected = products.find(prod => prod['id'] === itemNum)
        selected && allCartItems.push(selected)
    }

    const handlePicClick = (id: number) => {
        history.push(`/all-products/${id}`)
    }

    useEffect(() => {
        dispatch(getCartLS())
        // dispatch(getProducts())
    }, [dispatch])

    if (!cartOpen || !products) return null
    return (
        <div className='mini__cart-div'>
            <button onClick={() => setCartOpen(false)}>
                {`>>`}
            </button>
            <Link to="/cart">Build</Link>
            <div className="cart__pics">
                {allCartItems && allCartItems.map((item) => (
                    <img key={item.id} onClick={() => handlePicClick(item.id)} className="cart__pic" src={item.image_url} alt="an item" />
                ))}
            </div>
        </div>
    )
}

export default MiniCart
