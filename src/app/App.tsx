import { CardsHeader } from '@/components/ui/layout-components'
import { Layout } from '@/shared/ui/layout'

import { Router } from './router'

export function App() {
  return (
    <Layout>
      <CardsHeader isAuthorized />
      <Router />
    </Layout>
  )
}
