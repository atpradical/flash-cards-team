import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ProfilePage } from '@/pages/profile-page/profile-page'
import { SignInPage } from '@/pages/sign-in-page'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/sign-in',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <ProfilePage />,
    path: '/profile',
  },
]
const router = createBrowserRouter([...privateRoutes, ...publicRoutes])

export function Router() {
  return <RouterProvider router={router} />
}
