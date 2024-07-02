import { Outlet } from 'react-router-dom'

import { CardsHeader } from '@/components/ui/layout-components'
import { Layout } from '@/shared/ui/layout'

export function App() {
  return (
    <Layout>
      <CardsHeader isAuthorized />
      <Outlet />
    </Layout>
  )
}
