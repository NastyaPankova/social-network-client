import { type ChangeEvent, useState } from 'react'
import { ButtonFeed } from '~/components/shared/buttonFeed'
import { EmailField } from '~/components/shared/emailField'
import { PasswordField } from '~/components/shared/passwordField'
import { ButtonOk } from '~/components/shared/buttonOk'

export function RegistrationForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
          <ButtonOk email={email} password={password} fromForm="registration" />
          <ButtonFeed />
        </div>
      </form>
    </div>
  )
}
