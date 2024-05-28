import { ComponentPropsWithoutRef, ElementType } from 'react'
import clsx from 'clsx'
import s from './input.module.scss'
import { Typography } from '../typography'

type InputVariant = 'active' | 'default' | 'disabled' | 'error' | 'focus' | 'hover'

type Props<T extends ElementType> = {
  className?: string
  placeholder?: string
  helperText?: string
  label?: string
  labelPosition?: 'left' | 'top'
  size?: 'large' | 'medium' | 'small'
  variant: InputVariant
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>({
  className,
  label,
  helperText,
  placeholder = 'input',
  labelPosition = 'top',
  size,
  variant,
  ...rest
}: Props<T>) => {
  const inputId = `input-${Math.random().toString(36).slice(2, 11)}`

  const inputElement = (
    <input
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

  return (
    <div className={s.inputWrapper}>
      {label && labelPosition === 'top' && labelElement}
      {labelPosition === 'left' ? (
        <div className={s.horizontalLayout}>
          {labelElement}
          {inputElement}
        </div>
      ) : (
        inputElement
      )}
      {helperText && <Typography variant="error">{helperText}</Typography>}
    </div>
  )
}
