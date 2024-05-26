import React from 'react'
import s from './typography.module.scss'
import { TypographyVariant } from './types'

type TypographyProps<T extends React.ElementType> = {
  as?: T
  children: React.ReactNode
  variant?: TypographyVariant
  className?: string
} & React.ComponentPropsWithoutRef<T>

const Typography = <T extends React.ElementType = 'p'>({
  as,
  children,
  variant,
  className,
  ...restProps
}: TypographyProps<T>) => {
  const Component = as || 'p'
  const variantClass = variant ? s[`typography-${variant}`] : ''
  return (
    <Component className={`${className ? className + ' ' : ''}${variantClass}`} {...restProps}>
      {children}
    </Component>
  )
}

export default Typography
