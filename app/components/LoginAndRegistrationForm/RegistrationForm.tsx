import { type ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { ButtonHome } from '~/components/ButtonHome'
import { LoginField } from '~/components/LoginAndRegistrationForm/LoginField'
import { PasswordField } from '~/components/LoginAndRegistrationForm/PasswordField'

export function RegistrationForm({
  onOkClick,
}: {
  onOkClick: (login: string, password: string, fromForm: string) => void
}) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

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
            onClick={() => onOkClick(login, password, 'registration')}
          >
            Ok
          </Button>
          <ButtonHome />
        </div>
      </form>
    </div>
  )
}
