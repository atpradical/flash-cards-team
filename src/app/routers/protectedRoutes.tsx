import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

import { PATH } from '@/shared/enums'

export const PrivateRoutes = () => {
  const { isAuth } = useOutletContext<{ isAuth: boolean }>()

  return isAuth ? <Outlet /> : <Navigate to={PATH.SIGN_IN} />
}

export const PublicRoutes = () => {
  const { isAuth } = useOutletContext<{ isAuth: boolean }>()

  return isAuth ? <Navigate to={PATH.DECK_LIST} /> : <Outlet />
}
