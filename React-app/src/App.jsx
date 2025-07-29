import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setN] = useState('Prathmesh');

  return (
    <>
    <div>
      <h1>Username is {name}</h1>
      <button onClick={()=> setN('Emperor')}> Change user</button>
      {/* <h1 className="text-3xl font-bold underline line-through">Hello world! </h1> */}
    </div>
     
    </>
  )
}

export default App
