import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CardPage } from '@/pages/card-page'
import { CheckEmailPage } from '@/pages/check-email-page'
import { DeckListPage } from '@/pages/deck-list-page'
import { DeckPage } from '@/pages/deck-page'
import { Error404Page } from '@/pages/error-404-page'
import { PasswordRecoveryPage } from '@/pages/password-recovery-page'
import { ResetPassword } from '@/pages/password-reset'
import { ProfilePage } from '@/pages/profile-page'
import { SignInPage } from '@/pages/sign-in-page'
import { SignUpPage } from '@/pages/sign-up-page'
import { PATH } from '@/shared/enums'

import { App } from '../app'
import { PrivateRoutes, PublicRoutes } from './protectedRoutes'

const publicRoutes: RouteObject[] = [
  {
    element: <SignUpPage />,
    path: PATH.SIGN_UP,
  },
  {
    element: <SignInPage />,
    path: PATH.SIGN_IN,
  },

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

export const router = createBrowserRouter([
  {
    children: [
      {
        children: publicRoutes,
        element: <PublicRoutes />,
      },
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
    ],
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR_404} />,
    path: PATH.ROOT,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
