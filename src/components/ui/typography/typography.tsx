import { ComponentPropsWithoutRef, ElementType } from 'react'

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
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'caption', ...rest } = props

  const classNames = clsx(s.typography, variant && s[`typography-${variant}`], className)

  return <Component className={classNames} {...rest} />
}
