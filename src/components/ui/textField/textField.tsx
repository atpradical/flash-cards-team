import { ComponentPropsWithoutRef, useState } from 'react'

import clsx from 'clsx'

import s from './textField.module.scss'

import { Typography } from '../typography'
import { EyeOutline, SearchOutline } from '@/assets/components/svgIcons'

type inputVariant = 'text' | 'search' | 'password'

type Props = {
  error?: boolean
  helperText?: string
  label?: string
  placeholder?: string
  type?: inputVariant
  disabled?: boolean
  onSearchIconClick: () => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: Props) => {
  const {
    className,
    error = false,
    helperText,
    type = 'text',
    label = 'Label',
    disabled,
    placeholder = 'Enter here...',
    onSearchIconClick,
    ...rest
  } = props
  const [_, setInputType] = useState<'search' | 'text' | 'password'>(type)
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const togglePasswordVisibility = () => {
    if (type === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  const variantClass = s[`input-${type}`]

  const inputElement = (
    <div className={clsx(s.inputContainer, { [s['inputContainer-disabled']]: disabled })}>
      {type === 'search' ? (
        <div onClick={onSearchIconClick} className={s.iconSearch}>
          {' '}
          <SearchOutline />{' '}
        </div>
      ) : null}
      <input
        type={type}
        value={inputValue}
        placeholder={placeholder}
        className={clsx(
          s.input,
          className,
          variantClass,
          error && s[`input-error`],
          type === 'password' && s.inputWithIconEye,
          type === 'search' && s.inputWithIconSearch,
          { [s.disabled]: disabled }
        )}
        onChange={handleInputChange}
        {...rest}
      />
      {type === 'password' ? (
        <div className={clsx(s.iconEye, variantClass)} onClick={togglePasswordVisibility}>
          <EyeOutline />
        </div>
      ) : null}
      {/* {inputType === 'search' && inputValue.length ? (
        <div className={clsx(s.iconEye, s.iconClose, variantClass)} onClick={onClearInput}>
          <CloseOutline />
        </div>
      ) : null} */}
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
