import { LoginForm } from '~/components/loginRegistrationForm/loginForm'

export function LoginPage() {
  const onOkClick = (login: string, password: string, fromForm: string) => {
    console.log(login, password, fromForm)
  }

  return (
    <main //className="flex items-center justify-center pt-16 pb-4"
    >
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        Login
      </div>
      <LoginForm onOkClick={onOkClick} />
    </main>
  )
}
