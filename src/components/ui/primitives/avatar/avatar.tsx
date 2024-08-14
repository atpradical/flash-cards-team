import { ComponentPropsWithoutRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.scss'

type AvatarProps = {
  name?: string
  size?: 'l' | 'm' | 's'
  src?: string
} & ComponentPropsWithoutRef<typeof RadixAvatar.Root>

export const Avatar = ({ className, name, size = 'm', src, ...rest }: AvatarProps) => {
  const cn = {
    fallBack: clsx(s.avatarFallback, size === 'l' && s.bigLetter),
    image: s.avatarImage,
    root: clsx(s.avatarRoot, s[size], className),
  }

  const fallBack = name?.[0].toUpperCase()

  return (
    <RadixAvatar.Root className={cn.root} {...rest}>
      <RadixAvatar.Image alt={'user avatar'} className={cn.image} src={src} />
      <RadixAvatar.Fallback className={cn.fallBack}>{fallBack}</RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
