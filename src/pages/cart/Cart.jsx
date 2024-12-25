import { APPCONTEXT } from "../../context/AppContext"



const Cart = () => {
  const {cartData} = useContext(APPCONTEXT)
  return (
    <div className="container">
    <pre>
      {JSON.stringify(cartData)}
    </pre>

    </div>
  )
}

export default Cart