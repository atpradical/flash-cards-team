import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { CardsHeader } from '@/components/ui/layout-components'
import { store } from '@/services'
import { Layout } from '@/shared/ui/layout'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <CardsHeader />
        <Outlet />
      </Layout>
    </Provider>
  )
}
