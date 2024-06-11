import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './page.module.scss'

type Props = {
  mt?: CSSProperties['marginTop']
} & ComponentPropsWithoutRef<'div'>

type RefProps = ElementRef<'div'>

export const Page = forwardRef<RefProps, Props>((props, ref) => {
  const { className, mt = '33px', style, ...rest } = props

  const cn = clsx(s.page, className)

  const pageStyles = { marginTop: mt, ...style }

  return <div className={cn} ref={ref} style={pageStyles} {...rest} />
})
