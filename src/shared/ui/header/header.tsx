import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Card } from '@/components/ui/primitives'
import clsx from 'clsx'

import s from '@/shared/ui/header/header.module.scss'

type HeaderProps = ComponentPropsWithoutRef<typeof Card>

type PropsRef = ElementRef<typeof Card>

export const Header = forwardRef<PropsRef, HeaderProps>((props, ref) => {
  const { className, ...rest } = props

  const cn = clsx(s.header, className)

  return <Card as={'header'} className={cn} {...rest} ref={ref} />
})
