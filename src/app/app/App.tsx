import { Provider } from 'react-redux'

import { store } from '@/services'

import { AppContent } from './AppContent'

export function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}
