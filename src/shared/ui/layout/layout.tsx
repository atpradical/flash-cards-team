import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './layout.module.scss'

type Props = ComponentPropsWithoutRef<'main'>

type RefProps = ElementRef<'main'>

export const Layout = forwardRef<RefProps, Props>((props, ref) => {
  const { ...rest } = props

  return <main className={s.layout} ref={ref} {...rest} />
})
