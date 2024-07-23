import { Provider } from 'react-redux'

import { store } from '@/services'
import { Layout } from '@/shared/ui/layout'

export function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
