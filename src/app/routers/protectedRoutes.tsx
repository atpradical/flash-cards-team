import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

import { PATH } from '@/shared/enums'

export const PrivateRoutes = () => {
  const { isAuth } = useOutletContext<{ isAuth: boolean }>()

  if (isAuth) {
    return <Outlet />
  }

  if (!isAuth) {
    return <Navigate to={PATH.SIGN_IN} />
  }
}
