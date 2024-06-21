import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Card } from '@/components/ui/card'
import clsx from 'clsx'

import s from './header.module.scss'
import { User } from '@/types'

type Props = {
  userData?: User
} & ComponentPropsWithoutRef<typeof Card>

type PropsRef = ElementRef<typeof Card>

// @ts-ignore:  // todo: pass ref into header. Should be fixed once Card component be wrapped with forwardRef.
export const Header = forwardRef<PropsRef, Props>((props, ref) => {
  const { className, ...rest } = props

  const cn = clsx(s.header, className)

  return <Card as={'header'} className={cn} {...rest} />
})
