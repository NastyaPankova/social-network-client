import { LoginInput } from '~/pages/login/login-input'
import { GetData } from '~/pages/login/login-input-test'

export function LoginPage() {


  const onOkClick = (login:string, password:string) => {
    console.log(login, password)
  }
  return (
    <main //className="flex items-center justify-center pt-16 pb-4"
    >
      <div>Login page</div>
      {/* <LoginInput /> */}
      <GetData onOkClick={onOkClick}/>
    </main>
  )
}
