import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './header.module.scss'

import { Card } from '../../../components/ui/primitives/card'

type Props = ComponentPropsWithoutRef<typeof Card>

type PropsRef = ElementRef<typeof Card>

// @ts-ignore:  // todo: pass ref into header. Should be fixed once Card component be wrapped with forwardRef.
export const Header = forwardRef<PropsRef, Props>((props, ref) => {
  const { className, ...rest } = props

  const cn = clsx(s.header, className)

  return <Card as={'header'} className={cn} {...rest} />
})
