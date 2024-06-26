import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SignInPage } from '@/pages/sign-in-page'
import { CheckEmailPage } from '@/pages/check-email-page'
import { Error404Page } from '@/pages/error-404-page'
import { PasswordRecoveryPage } from '@/pages/password-recovery-page'
import { ResetPassword } from '@/pages/password-reset'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/sign-in',
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
    path: '*',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>test temporary page delete</div>,
    path: '/',
  },
]

const router = createBrowserRouter([...privateRoutes, ...publicRoutes])

export function Router() {
  return <RouterProvider router={router} />
}
