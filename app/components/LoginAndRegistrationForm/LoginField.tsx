import React, { type ChangeEvent } from 'react'
import { InputAdornment, TextField } from '@mui/material'

export function LoginField({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <TextField
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
