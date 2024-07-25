import { Outlet } from 'react-router-dom'

import { CardsHeader } from '@/components/ui/layout-components'
import { User, useMeQuery } from '@/services'
import { Layout } from '@/shared/ui/layout'
import { Progress } from '@radix-ui/react-progress'

export const AppContent = () => {
  const { data: user, isError, isFetching, isLoading } = useMeQuery()
  const isAuth = !isError

  if (isLoading || isFetching) {
    return <Progress />
  }

  const defaultUser: User | undefined = user && {
    // ругалась типизация
    avatar: user.avatar,
    created: user.created,
    email: user.email,
    id: user.id,
    isEmailVerified: user.isEmailVerified,
    name: user.name,
    updated: user.updated,
  }

  console.log('isAuth', isAuth)

  return (
    <Layout>
      <CardsHeader isAuth={!isError} isFetching={isFetching} userData={defaultUser} />
      <Outlet context={{ isAuth }} />
    </Layout>
  )
}
