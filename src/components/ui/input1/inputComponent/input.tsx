import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './input.module.scss'

import { Typography } from '../../typography'
import { IconButton } from '../inputIconButton'

type InputVariant = 'active' | 'default' | 'disabled' | 'error' | 'focus' | 'hover'

export type Icon = {
  icon: ReactNode
  type: 'close' | 'eye' | 'search'
}

type Props<T extends ElementType> = {
  className?: string
  error?: boolean
  helperText?: string
  icons?: Icon[]
  label?: string
  placeholder?: string
  size?: 'large' | 'medium' | 'small'
  variant: InputVariant
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>({
  className,
  error = false,
  helperText,
  icons = [],
  label = 'Label',
  placeholder = 'Enter here...',
  size = 'medium',
  variant = 'default',
  ...rest
}: Props<T>) => {
  const iconSearch = icons?.find(i => i.type === 'search')
  const iconEye = icons?.find(i => i.type === 'eye')
  const iconClose = icons?.find(i => i.type === 'close')

  const variantClass = s[`input-${variant}`]

  const inputElement = (
    <div className={clsx(s.inputContainer, size && s[`input-${size}`])}>
      {iconSearch ? (
        <IconButton className={clsx(s.iconSearch, variantClass)} icon={iconSearch.icon} />
      ) : null}
      <input
        className={clsx(
          s.input,
          className,
          variantClass,
          iconEye && s.inputWithIconEye,
          iconSearch && s.inputWithIconSearch
        )}
        placeholder={placeholder}
        {...rest}
      />
      {iconEye ? (
        <IconButton className={clsx(s.iconEye, variantClass)} icon={iconEye.icon} />
      ) : null}
      {iconClose ? (
        <IconButton className={clsx(s.iconEye, s.iconClose, variantClass)} icon={iconClose.icon} />
      ) : null}
    </div>
  )

  const labelElement = (
    <Typography className={s.label} variant={'body2'}>
      {label}
    </Typography>
  )

  return (
    <>
      {labelElement}
      {inputElement}
      {helperText && <Typography variant={'error'}>{helperText}</Typography>}
    </>
  )
}
