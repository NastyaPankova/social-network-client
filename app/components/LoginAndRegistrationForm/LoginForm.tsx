import { type ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { ButtonHome } from '~/components/ButtonHome'
import { LoginField } from '~/components/LoginAndRegistrationForm/LoginField'
import { PasswordField } from '~/components/LoginAndRegistrationForm/PasswordField'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router'

export function LoginForm({
  onOkClick,
}: {
  onOkClick: (login: string, password: string, fromForm: string) => void
}) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <form noValidate autoComplete="off">
        <LoginField
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLogin(e.target.value)
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
          <Button
            variant="contained"
            onClick={() => onOkClick(login, password, 'login')}
          >
            Ok
          </Button>
          <ButtonHome />
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
