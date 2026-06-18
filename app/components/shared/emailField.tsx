import React, { type ChangeEvent } from 'react'
import { InputAdornment, TextField } from '@mui/material'

//todo
//убрать значения по умолчанию

export function EmailField({
  value,
  onChange,
}: {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <TextField
      value={value}
      sx={{ mt: 2 }}
      label="E-mail"
      variant="outlined"
      fullWidth
      onChange={onChange}
      slotProps={{
        input: {
          endAdornment: <InputAdornment position="end"></InputAdornment>,
        },
      }}
    />
  )
}
