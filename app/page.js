'use client'
import React, { useState } from 'react';
export default function Home() {
  const [number, setNum] = useState(0);

  const increment = () => {
    setNum((prevNum) => prevNum + 1);
  }

  const decrement = () => {
    setNum((prevNum) => prevNum - 1);
  }

  return (
    <center>
      <div>
        <span><h1>COUNTER</h1></span>
        <span>counter: {number}</span>

        <div className='bContainer'>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </center>
  )
}
