import React, { type ChangeEvent } from 'react'
import { InputAdornment, TextField } from '@mui/material'

//todo
//убрать значения по умолчанию

export function NameField({
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
      label="Name"
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
