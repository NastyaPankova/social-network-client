import { Outlet } from 'react-router'

export function CommonLayoutPage() {
  return (
    <>
      <main className="flex items-center justify-center pt-16 pb-4">
        <h1>Common Layout Page</h1>
      </main>
      <Outlet />
    </>
  )
}
