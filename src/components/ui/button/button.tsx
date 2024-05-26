import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
  variant?: 'icon' | 'link' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth)

  return <Component className={`${classNames} ${className}`} {...rest} />
}

//todo: add ref and focus on tab
//todo: add to team project

// import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
//
// import s from './button.module.scss'
//
// export type ButtonProps<T extends ElementType = 'button'> = {
//   as?: T
//   children: ReactNode
//   className?: string
//   fullWidth?: boolean
//   variant?: 'primary' | 'secondary'
// } & ComponentPropsWithoutRef<T>
//
// export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
//   const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
//
//   return (
//     <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
//   )
// }
