import './App.css'
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(0)}> Reset </button>
        <button onClick={() => setCount(count +1)}> Incremant </button>
        <button onClick={() => setCount(count -1)}> Decremant </button>
      </div>
    </>
  )
}

export default App
