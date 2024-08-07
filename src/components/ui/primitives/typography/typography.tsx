import { ComponentPropsWithoutRef, ElementType, useMemo } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

export type TypographyVariant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'error'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

type TypographyProps<T extends ElementType> = {
  as?: T
  gray?: boolean
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, gray, variant = 'body2', ...rest } = props

  const classNames = useMemo(
    () => clsx(s.typography, variant && s[variant], gray && s.gray, className),
    [className, variant, gray]
  )

  return <Component className={classNames} {...rest} />
}
