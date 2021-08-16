import { createContext, useState, useContext } from 'react'

export const ViewContext = createContext()

export const ViewProvider = (props) => {
    const [cartOpen, setCartOpen] = useState(false)

    return (
        <ViewContext.Provider value={{ cartOpen, setCartOpen }}>
            {props.children}
        </ViewContext.Provider>
    )
}

export const useView = () => {
    return useContext(ViewContext)
}

