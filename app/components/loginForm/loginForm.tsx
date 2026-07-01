import React, { type ChangeEvent, useState } from 'react'
import { ButtonFeed } from '~/components/shared/buttonFeed'
import { EmailField } from '~/components/shared/emailField'
import { PasswordField } from '~/components/shared/passwordField'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router'
import { ButtonOkLogin } from '~/components/shared/buttonOkLogin'
import { Box } from '@mui/material'
import { FormContainer } from '~/components/shared/formContainer'

export function LoginForm() {
  const testEmail = 'AP@mail.com'
  const testPassword = 'pass1'

  const [email, setEmail] = useState(testEmail)
  const [password, setPassword] = useState(testPassword)

  const navigate = useNavigate()

  return (
    <FormContainer title="LOGIN">

      <EmailField
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <PasswordField
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <ButtonOkLogin email={email} password={password} />
        <ButtonFeed />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link
          href="/registration"
          underline="hover"
          onClick={(e) => {
            e.preventDefault()
            navigate('/registration')
          }}
        >
          No account?
        </Link>
      </Box>
    </FormContainer>
  )
}
