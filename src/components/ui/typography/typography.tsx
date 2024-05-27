import React from 'react'
import s from './typography.module.scss'
import clsx from 'clsx'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline'
  | 'link1'
  | 'link2'
  | 'error'

type TypographyProps<T extends React.ElementType> = {
  as?: T
  variant?: TypographyVariant
  className?: string
} & React.ComponentPropsWithoutRef<T>

export const Typography = <T extends React.ElementType = 'p'>({
  as,
  variant,
  className,
  ...restProps
}: TypographyProps<T>) => {
  const Component = as || 'p'

  return (
    <Component className={clsx(className, variant && s[`typography-${variant}`])} {...restProps} />
  )
}
