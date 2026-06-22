import { type ChangeEvent, useState } from 'react'
import { ButtonFeed } from '~/components/shared/buttonFeed'
import { EmailField } from '~/components/shared/emailField'
import { PasswordField } from '~/components/shared/passwordField'
import { ButtonOkRegistration } from '~/components/shared/buttonOkRegistration'
import { NameField } from '~/components/shared/nameField'
import { Box } from '@mui/material'
import { FormContainer } from '~/components/shared/formContainer'

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
    <FormContainer title="REGISTRATION">
      {/* ИСПРАВЛЕНО: value теперь привязаны к стейтам (name, email, password), поля активны для ввода */}
      <NameField
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
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

      {/* Кнопки выравниваются с помощью встроенного Box из MUI, убираем инлайн-стили div */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ButtonOkRegistration name={name} email={email} password={password} />
        <ButtonFeed />
      </Box>
    </FormContainer>
  )
}
