import { ChangeEvent, ComponentPropsWithoutRef, useMemo, useState } from 'react'

import {
  CloseOutline,
  EyeOffOutline,
  EyeOutline,
  SearchOutline,
} from '@/assets/components/svgIcons'
import clsx from 'clsx'

import s from './textField.module.scss'

import { Typography } from '../typography'
import { Button } from '../button'

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

  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const inputType = useMemo(() => (showPassword ? 'text' : variant), [showPassword, variant])

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
    <div className={clsx(s.inputContainer, { [s['inputContainer-disabled']]: disabled })}>
      {label && (
        <Typography className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={s.inputSvgWrapper}>
        {variant === 'search' && (
          <>
            <SearchOutline className={clsx(s.icon, s['icon-iconSearch'])} />
            {inputValue.length > 0 && (
              <CloseOutline
                onClick={handleClearInput}
                className={clsx(s.icon, s['icon-iconClose'])}
              />
            )}
          </>
        )}
        <input
          className={clsx(className, { [s.error]: error })}
          type={inputType}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChangeInput}
          {...rest}
        />
        {variant === 'password' && (
          <Button onClick={handleShowPassword} variant="icon">
            {showPassword ? (
              <EyeOffOutline className={clsx(s.icon, s['icon-iconEye'])} />
            ) : (
              <EyeOutline className={clsx(s.icon, s['icon-iconEye'])} />
            )}
          </Button>
        )}
      </div>
      {helperText && <Typography variant={'error'}>{helperText}</Typography>}
    </div>
  )
}
