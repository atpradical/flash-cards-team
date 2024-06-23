import { Router } from '@/app/router'
import { Header } from '@/shared/ui/header'
import { Layout } from '@/shared/ui/layout'

export function App() {
  return (
    <Layout>
      <Header />
      <Router />
    </Layout>
  )
}
