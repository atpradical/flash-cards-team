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
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    disabled,
    error,
    helperText,
    label,
    placeholder,
    variant = 'text',
    ...rest
  } = props

  const cn = {
    closeOutline: clsx(s.icon, s.close),
    container: clsx(s.container, disabled && s.disabled, className),
    eye: clsx(s.icon, s.eye, disabled && s.disabled),
    input: clsx(s.input, error && s.error),
    label: clsx(s.label),
    searchOutline: clsx(s.icon, s.search),
  }

  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const inputType = showPassword && variant === 'password' ? 'text' : variant
  const isSearch = variant === 'search'
  const isPassword = variant === 'password'

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
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
          className={cn.input}
          disabled={disabled}
          onChange={handleChangeInput}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          value={inputValue}
          ref={ref}
          {...rest}
        />
        {isPassword && (
          <Button disabled={disabled} onClick={handleShowPassword} variant={'icon'}>
            {inputValue.length ? <EyeOutline className={cn.eye} /> : null}
            {showPassword && <EyeOffOutline className={cn.eye} />}
          </Button>
        )}
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
