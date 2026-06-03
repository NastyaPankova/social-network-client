import React, { type ChangeEvent, useState } from 'react'
import { ButtonFeed } from '~/components/shared/buttonFeed'
import { EmailField } from '~/components/shared/emailField'
import { PasswordField } from '~/components/shared/passwordField'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router'
import { ButtonOk } from '~/components/shared/buttonOk'

export function LoginForm() {
  const testEmail = 'Test E-mail'
  const testPassword = 'Test Password'

  //const dispatch = useDispatch<AppDispatch>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  /*const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await dispatch(loginUser({ email, password })).unwrap()

    navigate('/secret')
  }*/

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <form noValidate autoComplete="off">
        <EmailField
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <PasswordField
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: 20,
          }}
        >
          <ButtonOk email={email} password={password} fromForm="login" />
          <ButtonFeed />
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
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
        </div>
      </form>
    </div>
  )
}
