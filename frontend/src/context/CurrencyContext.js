import { createContext, useState, useContext } from 'react'

export const CurrencyContext = createContext()

export const CurrencyProvider = (props) => {
    const [currency, setCurrency] = useState('usd')

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {props.children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => {
    return useContext(CurrencyContext)
}

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
const gbp = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' })

export const usdFormat = (price) => {
    return usd.format(price)
}

export const gbpFormat = (price) => {
    price = price * .7
    return gbp.format(price)
}