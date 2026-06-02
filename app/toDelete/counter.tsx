import { useState } from 'react'

export function Counter() {
  const [counter, setCount] = useState(0)

  function inc() {
    setCount(counter + 1)
  }

  function dec() {
    setCount(counter - 1)
  }

  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>{counter}</h1>
      <button
        style={{
          margin: '20px 40px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={inc}
      >
        Inc
      </button>
      <button
        style={{
          margin: '20px 40px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={dec}
      >
        Dec
      </button>
    </div>
  )
}
