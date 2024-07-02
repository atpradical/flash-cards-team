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
    closeOutline: clsx(s.icon),
    container: clsx(s.container, disabled && s.disabled, className),
    eye: clsx(s.icon, s.eye, disabled && s.disabled),
    input: clsx(s.input, error && s.error),
    label: clsx(s.label),
    searchOutline: clsx(s.icon, s.search),
  }

  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const isPassword = variant === 'password'
  const inputType = showPassword && isPassword ? 'text' : variant
  const isSearch = variant === 'search'

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
    <FlexContainer ai={'flex-start'} fd={'column'}>
      {label && (
        <Typography as={'label'} className={s.label}>
          {label}
        </Typography>
      )}
      <div className={s.inputSvgWrapper}>
        <input
          autoFocus
          className={cn.input}
          disabled={disabled}
          onChange={handleChangeInput}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          value={inputValue}
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
    </FlexContainer>
  )
})
