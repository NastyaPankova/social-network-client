import { Counter } from '~/components/counter'
import { Input_test } from '~/components/input_test'
import { LoginForm } from '~/components/LoginAndRegistrationForm/LoginForm'

const onOkClick = (login: string, password: string, fromForm: string) => {
  console.log(login, password, fromForm)
}

export function HomePage() {
  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Home page</h1>
      <div //className="flex items-center justify-center pb-4"
      >
        <Counter />
        <Input_test />
        <LoginForm onOkClick={onOkClick} />
      </div>
    </main>
  )
}
