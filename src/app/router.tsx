import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { SignInPage } from '@/pages/sign-in-page'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/sign-in',
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
