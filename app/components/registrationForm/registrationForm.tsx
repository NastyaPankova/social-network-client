import { type ChangeEvent, useState } from 'react'
import { ButtonFeed } from '~/components/shared/buttonFeed'
import { EmailField } from '~/components/shared/emailField'
import { PasswordField } from '~/components/shared/passwordField'
import { ButtonOkLogin } from '~/components/shared/buttonOkLogin'
import { NameField } from '~/components/shared/nameField'
import { ButtonOkRegistration } from '~/components/shared/buttonOkRegistration'

export function RegistrationForm() {
  //todo
  //убрать значения по умолчанию
  const testName = 'newname'
  const testEmail = 'newuser@mail.com'
  const testPassword = 'newpass'

  const [name, setName] = useState(testName)
  const [email, setEmail] = useState(testEmail)
  const [password, setPassword] = useState(testPassword)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <form noValidate autoComplete="off">
        <NameField
          value={testName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <EmailField
          value={testEmail}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <PasswordField
          value={testPassword}
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
          <ButtonOkRegistration name={name} email={email} password={password} />
          <ButtonFeed />
        </div>
      </form>
    </div>
  )
}
