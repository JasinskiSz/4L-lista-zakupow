import { useState } from 'react'
import './App.css'
import InputProduct from './InputProduct'
import Product from './Product'

function App() {
  const [data, setData] = useState([
    "Mleko", "Jajka", "Ziemniaki"
  ])

  const pushToData = (item) => {
    // setData([...data, item])
    const newData = [...data]
    newData.push(item)
    setData(newData)
  }

  return (
    <div className="container">
      <InputProduct addProduct={pushToData} />

      {
        data.map(
          (product, index) => <Product key={index} productName={product} />
        )
      }

    </div>
  )
}

export default App
