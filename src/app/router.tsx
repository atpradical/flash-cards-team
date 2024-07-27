import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Error404Page } from '@/pages'
import { CardPage } from '@/pages/card-page'
import { CheckEmailPage } from '@/pages/check-email-page'
import { DeckListPage } from '@/pages/deck-list-page'
import { DeckPage } from '@/pages/deck-page'
import { PasswordRecoveryPage } from '@/pages/password-recovery-page'
import { ResetPassword } from '@/pages/password-reset'
import { ProfilePage } from '@/pages/profile-page'
import { SignInPage } from '@/pages/sign-in-page'
import { SignUpPage } from '@/pages/sign-up-page'
import { PATH } from '@/shared/enums'
import { useAuthContext } from '@/shared/hooks'
import { Layout } from '@/shared/ui/layout'

const authRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: PATH.SIGN_IN,
  },
  {
    element: <SignUpPage />,
    path: PATH.SIGN_UP,
  },
]

const publicRoutes: RouteObject[] = [
  {
    element: <PasswordRecoveryPage />,
    path: PATH.PWD_RECOVERY,
  },
  {
    element: <ResetPassword />,
    path: PATH.PWD_RESET,
  },
  {
    element: <CheckEmailPage />,
    path: PATH.CHECK_EMAIL,
  },
  {
    element: <Error404Page />,
    path: PATH.ERROR_404,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={PATH.DECK_LIST} />,
    path: PATH.ROOT,
  },
  {
    element: <CardPage />,
    path: PATH.CARD_LEARN,
  },
  {
    element: <DeckListPage />,
    path: PATH.DECK_LIST,
  },
  {
    element: <DeckPage />,
    path: PATH.DECK,
  },
  {
    element: <ProfilePage />,
    path: PATH.PROFILE,
  },
]

const PrivateRoutes = () => {
  const { isAuth } = useAuthContext()

  return isAuth ? <Outlet /> : <Navigate to={PATH.SIGN_IN} />
}

const AuthRoutes = () => {
  const { isAuth } = useAuthContext()

  return !isAuth ? <Outlet /> : <Navigate to={PATH.ROOT} />
}

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        children: authRoutes,
        element: <AuthRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    errorElement: <Navigate to={PATH.ERROR_404} />,
    path: PATH.ROOT,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
