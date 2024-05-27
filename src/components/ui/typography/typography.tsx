import React from 'react'

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

type TypographyProps<T extends React.ElementType> = {
  as?: T
  className?: string
  variant?: TypographyVariant
} & React.ComponentPropsWithoutRef<T>

export const Typography = <T extends React.ElementType = 'p'>({
  as,
  className,
  variant,
  ...restProps
}: TypographyProps<T>) => {
  const Component = as || 'p'

  return (
    <Component className={clsx(className, variant && s[`typography-${variant}`])} {...restProps} />
  )
}
