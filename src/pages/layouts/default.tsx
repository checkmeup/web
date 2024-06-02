import { Outlet } from 'react-router-dom'
import { Header, Footer } from '~/widgets'

export const DefaultLayout = () => {
  return (
    <div className="relative mx-auto max-w-screen-xl px-5">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
