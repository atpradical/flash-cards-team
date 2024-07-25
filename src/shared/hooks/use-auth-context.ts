import { useOutletContext } from 'react-router-dom'

export type AuthContext = {
  isAuth: boolean
}

export const useAuthContext = () => {
  return useOutletContext<AuthContext>()
}
