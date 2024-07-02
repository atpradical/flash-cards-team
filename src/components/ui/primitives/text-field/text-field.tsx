import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import {
  CloseOutline,
  EyeOffOutline,
  EyeOutline,
  SearchOutline,
} from '@/assets/components/svgIcons'
import { Button, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './text-field.module.scss'

export type TextFieldProps = {
  error?: boolean
  helperText?: string
  label?: string
  onInputChange?: (value: string) => void // only for input value
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
    onInputChange,
    placeholder,
    value,
    variant = 'text',
    ...rest
  } = props

  const cn = {
    container: clsx(s.container, disabled && s.disabled, className),
    eye: clsx(s.icon, s.eye, disabled && s.disabled),
    icon: clsx(s.icon),
    iconSearch: clsx(s.icon, s.search),
    input: clsx(s.input, error && s.error),
  }

  const [showPassword, setShowPassword] = useState(false)

  const isPassword = variant === 'password'
  const inputType = showPassword && isPassword ? 'text' : variant
  const isSearch = variant === 'search'

  const showPasswordHandler = () => {
    setShowPassword(prev => !prev)
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onInputChange?.(e.currentTarget.value)
  }

  const handleClearInput = () => {
    onInputChange?.('')
  }

  console.log('value', value)

  return (
    <FlexContainer ai={'flex-start'} fd={'column'}>
      {label && (
        <Typography as={'label'} gray>
          {label}
        </Typography>
      )}
      <div className={cn.container}>
        <input
          autoFocus
          className={cn.input}
          disabled={disabled}
          onChange={handleChangeInput}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          value={value}
          {...rest}
        />
        {isPassword && !!value && (
          <Button disabled={disabled} onClick={showPasswordHandler} variant={'icon'}>
            {value && <EyeOutline className={cn.eye} />}
            {showPassword && <EyeOffOutline className={cn.eye} />}
          </Button>
        )}
        {isSearch && (
          <>
            <SearchOutline className={cn.iconSearch} />
            {!!value && (
              <Button onClick={handleClearInput} variant={'icon'}>
                <CloseOutline className={cn.icon} />
              </Button>
            )}
          </>
        )}
      </div>
      {helperText && <Typography variant={'error'}>{helperText}</Typography>}
    </FlexContainer>
  )
})
