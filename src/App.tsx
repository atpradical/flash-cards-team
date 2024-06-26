import { Progress } from '@/components/ui/progress'
import { Layout } from '@/shared/ui/layout'

import { CardsHeader } from './components/ui/cards-header'

export function App() {
  return (
    <Layout>
      <CardsHeader isAuthorized />
      <Progress color={'green'} />
    </Layout>
  )
}
