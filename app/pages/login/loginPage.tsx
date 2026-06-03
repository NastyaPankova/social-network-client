import { LoginForm } from '~/components/loginForm/loginForm'

export function LoginPage() {
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        Login
      </div>
      <LoginForm />
    </main>
  )
}
