import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'

import { CardsHeader } from '@/components/ui/layout-components'
import { store } from '@/services/store'
import { Layout } from '@/shared/ui/layout'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <CardsHeader isAuthorized />
        <Outlet />
      </Layout>
    </Provider>
  )
}
