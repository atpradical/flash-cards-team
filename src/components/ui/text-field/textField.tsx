import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import {
  CloseOutline,
  EyeOffOutline,
  EyeOutline,
  SearchOutline,
} from '@/assets/components/svgIcons'
import clsx from 'clsx'

import s from './textField.module.scss'

import { Button } from '../button'
import { Typography } from '../typography'

export type TextFieldProps = {
  error?: boolean
  helperText?: string
  label?: string
  value?: string
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    disabled,
    error,
    helperText,
    label,
    onChange,
    placeholder,
    value,
    variant = 'text',
    ...rest
  } = props

  const cn = {
    closeOutline: clsx(s.icon),
    container: clsx(s.container, disabled && s.disabled, className),
    eye: clsx(s.icon, s.eye, disabled && s.disabled),
    input: clsx(s.input, error && s.error),
    label: clsx(s.label),
    searchOutline: clsx(s.icon, s.search),
  }

  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState(value || '')

  const isPassword = variant === 'password'
  const inputType = showPassword && isPassword ? 'text' : variant
  const isSearch = variant === 'search'

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (onChange) {
      onChange(e)
    }
  }

  const handleClearInput = () => {
    setInputValue('')
  }

  return (
    <div className={cn.container}>
      {label && (
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={s.inputSvgWrapper}>
        <input
          {...rest}
          className={cn.input}
          disabled={disabled}
          formNoValidate
          onChange={handleChangeInput}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          value={inputValue}
        />
        {isPassword && inputValue.length ? (
          <Button disabled={disabled} onClick={handleShowPassword} variant={'icon'}>
            {showPassword ? (
              <EyeOffOutline className={cn.eye} />
            ) : (
              <EyeOutline className={cn.eye} />
            )}
          </Button>
        ) : null}
        {isSearch && (
          <>
            <SearchOutline className={cn.searchOutline} />
            {inputValue.length > 0 && (
              <Button onClick={handleClearInput} variant={'icon'}>
                <CloseOutline className={cn.closeOutline} />
              </Button>
            )}
          </>
        )}
      </div>
      {helperText && <Typography variant={'error'}>{helperText}</Typography>}
    </div>
  )
})
