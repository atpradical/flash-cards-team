import { Outlet } from 'react-router-dom'

import { CardsHeader } from '@/components/ui/layout-components'
import { useMeQuery } from '@/services'
import { Layout } from '@/shared/ui/layout'
import { Progress } from '@radix-ui/react-progress'

export const AppContent = () => {
  const { data: user, isError, isFetching, isLoading } = useMeQuery()
  const isAuth = !isError && !!user

  if (isLoading || isFetching) {
    return <Progress />
  }

  console.log('isAuth', isAuth)

  return (
    <Layout>
      <CardsHeader isAuth={!isError} isFetching={isFetching} userData={user} />
      <Outlet context={{ isAuth }} />
    </Layout>
  )
}
