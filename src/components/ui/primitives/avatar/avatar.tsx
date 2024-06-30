import { ComponentPropsWithoutRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.scss'

type Props = {
  size?: 'l' | 'm' | 's'
  src?: string
  title?: string
} & ComponentPropsWithoutRef<typeof RadixAvatar.Root>

export const Avatar = (props: Props) => {
  const { className, size = 'm', src, title, ...rest } = props

  const cn = {
    fallBack: clsx(s.avatarFallback),
    image: clsx(s.avatarImage),
    root: clsx(s.avatarRoot, s[size], className),
  }

  return (
    <RadixAvatar.Root className={cn.root} {...rest}>
      <RadixAvatar.Image alt={'user avatar'} className={cn.image} src={src} />
      <RadixAvatar.Fallback className={cn.fallBack}>{title}</RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
