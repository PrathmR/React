import { useState } from 'react'
import './App.css'

function App() {

  const [username, setUsername] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(username);
    setUsername(''); 
  }

  return (
    <div>
      <form onSubmit={(e)=>
        submitHandler(e)
      }>
        <input value={username} 
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        className='px-4 rounded py-3 text-xl m-5 border-1 solid white font-semibold' type= 'text'
        placeholder='Enter your name'></input>
        <button className='bg-blue-500 text-white px-4 py-2 rounded' type='submit'>Submit</button>
      </form>
    </div>

  )  
}

export default App
