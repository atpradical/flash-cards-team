import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import s from './input.module.scss'
import { Typography } from '../typography'

type InputVariant = 'active' | 'default' | 'disabled' | 'error' | 'focus' | 'hover'

export type Icon = {
  type: 'eye' | 'search'
  icon: ReactNode
}

type Props<T extends ElementType> = {
  className?: string
  icons: Icon[]
  placeholder?: string
  helperText?: string
  label?: string
  labelPosition?: 'top'
  size?: 'large' | 'medium' | 'small'
  variant: InputVariant
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>({
  className,
  label = 'Label',
  helperText,
  placeholder = 'Enter here...',
  size = 'medium',
  icons,
  variant = 'default',
  ...rest
}: Props<T>) => {
  const inputId = `input-${Math.random().toString(36).slice(2, 11)}`

  const inputElement = (
    <input
      placeholder={placeholder}
      id={inputId}
      className={clsx(s.input, s[`input-${variant}`], size && s[`input-${size}`], className)}
      {...rest}
    />
  )

  const labelElement = (
    <label className={s.label} htmlFor={inputId}>
      {label}
    </label>
  )

  const renderIcons = () => {
    return icons?.map((iconData, index) => (
      <button key={index} className={clsx(s.icon, s[`icon-${iconData.type}`])}>
        {iconData.icon}
      </button>
    ))
  }

  return (
    <div className={s.inputWrapper}>
      {labelElement}
      {inputElement}
      {renderIcons()}

      {helperText && <Typography variant="error">{helperText}</Typography>}
    </div>
  )
}
