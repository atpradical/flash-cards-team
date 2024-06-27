import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CheckEmailPage } from '@/pages/check-email-page'
import { DeckListPage } from '@/pages/deck-list-page'
import { PasswordRecoveryPage } from '@/pages/password-recovery-page'
import { ResetPassword } from '@/pages/password-reset'
import { SignInPage } from '@/pages/sign-in-page'
import { SignUpPage } from '@/pages/sign-up-page'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/sign-in',
  },
  {
    element: <SignUpPage />,
    path: '/sign-up',
  },
  {
    element: <PasswordRecoveryPage />,
    path: '/password-recovery',
  },
  {
    element: <ResetPassword />,
    path: '/reset-password',
  },
  {
    element: <CheckEmailPage />,
    path: '/check-email',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>test temporary page delete</div>,
    path: '/',
  },
  {
    element: <DeckListPage />,
    path: '/deck-list',
  },
]

const router = createBrowserRouter([...privateRoutes, ...publicRoutes])

export function Router() {
  return <RouterProvider router={router} />
}
