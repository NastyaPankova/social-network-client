import { RegistrationForm } from '~/components/loginRegistrationForm/registrationForm'

export function RegistrationPage() {
  const onOkClick = (login: string, password: string, fromForm: string) => {
    console.log(login, password, fromForm)
  }

  return (
    <main //className="flex items-center justify-center pt-16 pb-4"
    >
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        Registration
      </div>
      <RegistrationForm onOkClick={onOkClick} />
    </main>
  )
}
