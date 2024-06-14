import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

type Props<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>
type InferType<T> = T extends ElementType<infer U> ? U : never

export const Card = forwardRef(
  <T extends ElementType = 'div'>(props: Props<T>, ref: ForwardedRef<InferType<T>>) => {
    const { as: Component = 'div', className, ...rest } = props
    const classNames = clsx(s.card, className)

    return <Component className={classNames} ref={ref} {...rest} />
  }
)
