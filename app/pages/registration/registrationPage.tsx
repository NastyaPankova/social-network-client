import { RegistrationForm } from '~/components/registrationForm/registrationForm'

export function RegistrationPage() {
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        Registration
      </div>
      <RegistrationForm />
    </main>
  )
}
