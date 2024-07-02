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
import { ROUTES } from '@/shared/enums/routes'

import { App } from './App'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: ROUTES.SIGN_IN,
  },
  {
    element: <SignUpPage />,
    path: ROUTES.SIGN_UP,
  },
  {
    element: <PasswordRecoveryPage />,
    path: ROUTES.PWD_RECOVERY,
  },
  {
    element: <ResetPassword />,
    path: ROUTES.PWD_RESET,
  },
  {
    element: <CheckEmailPage />,
    path: ROUTES.CHECK_EMAIL,
  },
  {
    element: <Error404Page />,
    path: ROUTES.ERROR_404,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={ROUTES.DECK_LIST} />,
    path: ROUTES.ROOT,
  },
  {
    element: <CardPage />,
    path: ROUTES.CARD,
  },
  {
    element: <DeckListPage />,
    path: ROUTES.DECK_LIST,
  },
  {
    element: <DeckPage />,
    path: ROUTES.DECK,
  },
  {
    element: <ProfilePage />,
    path: ROUTES.PROFILE,
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <App />,
      },
      ...publicRoutes,
    ],
    element: <App />,
    errorElement: <Navigate to={ROUTES.ERROR_404} />,
    path: ROUTES.ROOT,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
