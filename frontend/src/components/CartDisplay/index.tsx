import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import Roller from '@bit/joshk.react-spinners-css.roller';

import { useAppDispatch, useAppSelector } from '../../hooks'
import { getCartLS } from '../../store/cart'
import { fetchProducts, Product } from '../../store/products'
import CartItem from '../CartItem'
import { usdFormat, gbpFormat, useCurrency } from '../../context/CurrencyContext'
import { useView } from '../../context/ViewCartContext'

import './CartDisplay.css'

export default function CartDisplay() {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cart)
    const products = useAppSelector(state => state.products.products)
    const { currency } = useCurrency()
    const { changed, setChanged } = useView()
    const [part, setPart] = useState(undefined)
    const [labor, setLabor] = useState(undefined)
    const [total, setTotal] = useState(undefined)
    // const [allCartItems, setAllCartItems] = useState([])

    let allCartItems: Array<Product> = []
    let one = 1

    for (let i = 0; i <= cart.length; i++) {
        let itemNum: number = cart[i]
        let selected = products.find(prod => prod.id === itemNum)
        selected && allCartItems.push(selected)
    }

    let format = currency === 'usd' ? usdFormat : gbpFormat

    //* not currently in use, possible future re implement with a ROLLER
    // const partTotaler = (n) => {
    //     return (<DigitRoll num={n} length={9} divider="" delay="1" />)
    // }

    useEffect(() => {
        dispatch(fetchProducts())
        const totaler = async () => {
            await dispatch(getCartLS())
        }
        totaler()
        return () => setChanged(false)

    }, [dispatch, changed])

    if (!cart) {
        return (
            <h1>no cart found </h1>
        )
    }
    const cartArray = cart
    return (
        <div className="cart__page" >
            <div className="cart__breakdown" > YOUR BUILD BREAKDOWN
                {
                    !allCartItems.length && <div><Loader type="Rings" color="#00BFFF" height={80} width={80} /> </div>}
                {
                    allCartItems.length > 0 && <>

                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={one} > Parts Total </th>
                                    <th colSpan={one} > Labor Total </th>
                                    <th colSpan={one} > Build Total </th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>

                                    <td className='table-info' > {
                                        format(
                                            allCartItems.reduce((acc, el) => {
                                                return el.price + acc
                                            }, 0))
                                    }
                                    </td>


                                    <td className='table-info' > {
                                        format(
                                            allCartItems.reduce((acc, el) => {
                                                return el.labor_estimate + acc
                                            }, 0))
                                    }
                                    </td>


                                    <td className='table-info' > {
                                        format(
                                            allCartItems.reduce((acc, el) => {
                                                return el.price + el.labor_estimate + acc
                                            }, 0))
                                    }
                                    </td>
                                </tr>
                            </tbody>
                        </table>



                        {/* 
                    <div className='parts__total'>
                        Parts total: {format(
                            allCartItems.reduce((acc, el) => {
                                return el.price + acc
                            }, 0))
                        }
                    </div>

                    <div className="labor__est-total">
                        Labor total estimate: {format(
                            allCartItems.reduce((acc, el) => {
                                return el.labor_estimate + acc
                            }, 0))
                        }
                    </div>

                    <div className="build__estimate">
                        Build estimate: {format(
                            allCartItems.reduce((acc, el) => {
                                return el.price + el.labor_estimate + acc
                            }, 0))
                        }
                    </div> */}

                    </>}

            </div>

            <div className="cart__container" >
                {/* {changed === false && */}
                <>

                    {
                        cartArray.map((item) => (
                            <CartItem key={item} itemId={item} />
                        ))
                    }
                </>
                {/* } */}
            </div>


        </div>
    )
}