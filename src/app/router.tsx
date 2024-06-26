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
  {
    element: <CardPage />,
    path: '/card',
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
