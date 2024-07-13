import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Progress } from '@/components/ui/primitives'
import clsx from 'clsx'

import s from './page.module.scss'

type Props = {
  load?: boolean
  mt?: CSSProperties['marginTop']
} & ComponentPropsWithoutRef<'div'>

type RefProps = ElementRef<'div'>

export const Page = forwardRef<RefProps, Props>((props, ref) => {
  const { className, load = false, mt = '33px', style, ...rest } = props

  const cn = clsx(s.page, className)

  const pageStyles = { marginTop: mt, ...style }

  return (
    <>
      {load && <Progress />}
      <div className={cn} ref={ref} style={pageStyles} {...rest} />
    </>
  )
})
