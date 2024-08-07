import { ComponentPropsWithoutRef, memo, useMemo } from 'react'

import { Nullable } from '@/shared/types/common'
import * as RadixAvatar from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.scss'

type Props = {
  name?: string
  size?: 'l' | 'm' | 's'
  src?: Nullable<string>
} & ComponentPropsWithoutRef<typeof RadixAvatar.Root>

export const Avatar = memo((props: Props) => {
  const { className, name, size = 'm', src, ...rest } = props

  const cn = useMemo(
    () => ({
      fallBack: clsx(s.avatarFallback, size === 'l' && s.bigLetter),
      image: clsx(s.avatarImage),
      root: clsx(s.avatarRoot, s[size], className),
    }),
    [className, size]
  )

  const fallBack = useMemo(() => name?.[0].toUpperCase(), [name])

  return (
    <RadixAvatar.Root className={cn.root} {...rest}>
      <RadixAvatar.Image alt={'user avatar'} className={cn.image} src={src ?? ''} />
      <RadixAvatar.Fallback className={cn.fallBack}>{fallBack}</RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
})
