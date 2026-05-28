import { useState } from 'react'

export function Input_test() {
  const [inputString, setInputString] = useState('test')

  return (
    <div>
      <h1>{inputString}</h1>
      <input
        type="text"
        style={{
          border: '2px solid black',
          borderRadius: '4px',
          padding: '5px',
        }}
        value={inputString}
        onChange={(event) => setInputString(event.target.value)}
      />
    </div>
  )
}
