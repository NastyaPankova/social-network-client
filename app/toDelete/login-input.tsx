import { useState } from 'react'
import Button from '@mui/material/Button'

function ButtonUsage({ str }: { str: string }) {
  return <Button variant="contained">{str}</Button>
}

function Input({
  placeholder,
  inputType,
}: {
  placeholder: string
  inputType: string
}) {
  const [inputString, setInputString] = useState(placeholder)
  console.log(inputString)
  return (
    <div>
      <h1>{inputType}</h1>
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

export function LoginInput() {
  return (
    <div>
      <div>
        <Input placeholder={'Enter E-Mail'} inputType={'Login'} />
        <Input placeholder={'Enter Password'} inputType={'Password'} />
        <ButtonUsage str={'Ok'} />
        <ButtonUsage str={'Cancel'} />
      </div>
    </div>
  )
}
