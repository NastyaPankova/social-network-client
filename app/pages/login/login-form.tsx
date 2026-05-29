import { type ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'
import { ButtonHome } from '~/components/ButtonHome'
import { InputForm } from '~/components/InputForm'

export function LoginForm({
  onOkClick,
}: {
  onOkClick: (login: string, password: string, fromForm: string) => void
}) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form noValidate autoComplete="off">
        <InputForm
          placeholder={'Enter E-Mail'}
          inputType={'Login'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLogin(e.target.value)
          }
        />
        <InputForm
          placeholder={'Enter Password'}
          inputType={'Password'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button
            variant="contained"
            onClick={() => onOkClick(login, password, 'login')}
          >
            Ok
          </Button>
          <ButtonHome />
        </ButtonGroup>
      </form>
    </div>
  )
}
