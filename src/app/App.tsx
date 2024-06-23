import { Router } from '@/app/router'
import { CardsHeader } from '@/components/ui/cards-header'
import { Layout } from '@/shared/ui/layout'

export function App() {
  return (
    <Layout>
      <CardsHeader isAuthorized />
      <Router />
    </Layout>
  )
}
