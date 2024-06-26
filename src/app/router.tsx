import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CardPage } from '@/pages/card-page'
import { ResetPassword } from '@/pages/password-reset'
import { SignInPage } from '@/pages/sign-in-page'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/sign-in',
  },
  {
    element: <ResetPassword />,
    path: '/reset-password',
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
]

const router = createBrowserRouter([...privateRoutes, ...publicRoutes])

export function Router() {
  return <RouterProvider router={router} />
}
