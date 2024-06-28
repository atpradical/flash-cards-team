import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

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
  {
    element: <Error404Page />,
    path: '/404',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>test temporary page delete</div>,
    path: '/',
  },
  {
    element: <CardPage />,
    path: '/card',
  },
  {
    element: <DeckListPage />,
    path: '/deck-list',
  },
  {
    element: <DeckPage />,
    path: '/deck',
  },
  {
    element: <ProfilePage />,
    path: '/profile',
  },
]

const router = createBrowserRouter([...privateRoutes, ...publicRoutes])

export function Router() {
  return <RouterProvider router={router} />
}
