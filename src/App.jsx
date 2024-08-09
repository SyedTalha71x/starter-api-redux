import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/slices/products'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log("State", selector)

  if (selector.products.isLoading) {
    return <h1>Loading.............</h1>
  }

  return (
    <>
      <div className='container'>
        <button className='btn' onClick={() => { dispatch(fetchProducts()) }}>
          Get Products
        </button>
        <div>
          {selector.products.data && selector.products.data.map((item) => {
            return <div>
              <h1>{item.title}</h1>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
