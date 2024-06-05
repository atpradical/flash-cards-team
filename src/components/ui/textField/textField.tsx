import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

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

type Props = {
  error?: boolean
  helperText?: string
  label?: string
  variant?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: Props) => {
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
    container: clsx(s.container, disabled && s.disabled),
    eye: clsx(s.icon, s.eye, disabled && s.disabled),
    input: clsx(className, s.input, error && s.error),
    label: clsx(s.label),
    searchOutline: clsx(s.icon, s.search),
  }

  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const inputType = showPassword && variant === 'password' ? 'text' : variant

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
        {variant === 'search' && (
          <>
            <SearchOutline className={cn.searchOutline} />
            {inputValue.length > 0 && (
              <Button onClick={handleClearInput} variant={'icon'}>
                <CloseOutline className={cn.closeOutline} />
              </Button>
            )}
          </>
        )}
        <input
          className={cn.input}
          disabled={disabled}
          onChange={handleChangeInput}
          placeholder={placeholder}
          type={inputType}
          value={inputValue}
          {...rest}
        />
        {variant === 'password' && (
          <Button disabled={disabled} onClick={handleShowPassword} variant={'icon'}>
            {showPassword ? (
              <EyeOffOutline className={cn.eye} />
            ) : (
              <EyeOutline className={cn.eye} />
            )}
          </Button>
        )}
      </div>
      {helperText && <Typography variant={'error'}>{helperText}</Typography>}
    </div>
  )
}
