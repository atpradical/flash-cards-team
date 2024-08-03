import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { CardsHeader } from '@/components/ui/layout-components'
import { Progress } from '@/components/ui/primitives'
import { useMeQuery } from '@/services'
import { AuthContext } from '@/shared/hooks'

import s from './layout.module.scss'

type Props = ComponentPropsWithoutRef<'main'>

type RefProps = ElementRef<'main'>

export const Layout = forwardRef<RefProps, Props>((props, ref) => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuth = !isError && !isLoading

  return (
    <>
      <CardsHeader isAuth={isAuth} userData={data} />
      <main className={s.layout} ref={ref} {...props}>
        {isLoading ? <Progress /> : <Outlet context={{ isAuth } satisfies AuthContext} />}
      </main>
    </>
  )
})
