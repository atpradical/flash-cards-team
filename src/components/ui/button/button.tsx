import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

// If T matches ElementType then we return T, otherwise Never (nothing).
// https://medium.com/@developer.olly/understanding-typescript-infer-ac42bd018f3
type InferType<T> = T extends ElementType<infer U> ? U : never

type Props<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'icon' | 'link' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: Props<T>, ref: ForwardedRef<InferType<T>>) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth)

    return <Component className={`${classNames} ${className}`} ref={ref} {...rest} />
  }
)
