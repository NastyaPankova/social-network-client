import type { ChangeEvent } from 'react'
import { Input } from '@mui/material'

export function InputForm({
  placeholder,
  inputType,
  onChange,
}: {
  placeholder: string
  inputType: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <h1>{inputType}</h1>
      <Input
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'description' }}
        onChange={onChange}
      />
    </div>
  )
}
