import { useContext } from 'react'
import FilterButton from '../../components/filter-button/FilterButton'
import './Home.css'
import { GoPlus } from 'react-icons/go'
import { APPCONTEXT } from '../../context/AppContext'

const Home = (props) => {
  const {setCartData} = useContext(APPCONTEXT)

  const addToCart = (product) => {
    // ... spread and rest operator
    setCartData( (oldPizza) => {
      const arr = [...oldPizza, product]
      localStorage.setItem('cart', JSON.stringify(arr))
      return arr
    })
  }

  return (
    <div className=''>
      <FilterButton />
      <h3>Все пиццы</h3>
      <div className='home-pizza'>
        {props.data.map(pizza => {
          return (
            <div key={pizza.name} className="pizza-card">
              <div className="pizza-card-img">
                <img src={pizza.image} alt="image" />
                <h4>{pizza.name}</h4>
              </div>
              <div className="pizza-card-text">
                <div className='pizza-type'>
                  {pizza.crusts.map(item => <p key={item}>{item}</p>)}
                </div>
                <div className='pizza-sizes'>
                  {pizza.sizes.map( size => <p key={size}>{size}</p> )}
                </div>
              </div>
              <div className="pizza-card-footer">
                <h4> от ${pizza.price}  </h4>
                <button onClick={() => {
                  addToCart(pizza)
                }}> <GoPlus /> Добавить </button>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Home

// rafce