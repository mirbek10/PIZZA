import { createContext, useState } from "react"

export const APPCONTEXT = createContext()
// Деструктуризация
const { Provider, Consumer } = APPCONTEXT
// useContext

const AppContext = ({ children }) => {
    const [cartData, setCartData] = useState([])

    const value = {
        cartData,
        setCartData 
    }
    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('cart')) || []
        setCartData(arr)
        
    }, [])

    return (
        <Provider value={value}>{children}</Provider>
    )
}

export default AppContext