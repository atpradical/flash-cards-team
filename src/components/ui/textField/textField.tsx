import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { EyeOutline, SearchOutline } from '@/assets/components/svgIcons'
import clsx from 'clsx'

import s from './textField.module.scss'

import { Typography } from '../typography'

type inputVariant = 'password' | 'search' | 'text'

type Props = {
  disabled?: boolean
  error?: boolean
  helperText?: string
  label?: string
  onSearchIconClick: () => void
  placeholder?: string
  type?: inputVariant
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: Props) => {
  const {
    className,
    disabled,
    error = false,
    helperText,
    label = 'Label',
    onSearchIconClick,
    placeholder = 'Enter here...',
    type = 'text',
    ...rest
  } = props
  const [inputType, setInputType] = useState<inputVariant>(type)
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const togglePasswordVisibility = () => {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  const variantClass = s[`input-${type}`]

  const inputElement = (
    <div className={clsx(s.inputContainer, { [s['inputContainer-disabled']]: disabled })}>
      {type === 'search' ? (
        <div className={s.iconSearch} onClick={onSearchIconClick}>
          {' '}
          <SearchOutline />{' '}
        </div>
      ) : null}
      <input
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
        placeholder={placeholder}
        type={type}
        value={inputValue}
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
