import { Outlet } from 'react-router'
import { Counter } from '~/components/counter'
import { Input_test } from '~/components/input_test'

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
      </div>
    </main>
  )
}
