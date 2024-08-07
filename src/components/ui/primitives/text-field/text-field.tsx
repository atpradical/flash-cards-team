import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { CloseOutline, EyeOffOutline, EyeOutline, SearchOutline } from '@/assets/icons'
import { Button, Typography } from '@/components/ui/primitives'
import { useSearchParamUpdater } from '@/shared/hooks'
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
    onChange,
    placeholder,
    value,
    variant = 'text',
    ...rest
  } = props

  const cn = useMemo(
    () => ({
      container: clsx(s.container, disabled && s.disabled),
      eye: clsx(s.icon, error && s.error),
      icon: clsx(s.icon, disabled && s.disabled),
      iconSearch: clsx(s.icon, s.search),
      input: clsx(s.input, s[variant], error && s.error, className),
    }),
    [disabled, variant, className, error]
  )

  const [showPassword, setShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const updateSearchParam = useSearchParamUpdater()

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const isPassword = variant === 'password'
  const inputType = !showPassword && isPassword ? 'password' : 'text'
  const isSearch = variant === 'search'

  const showPasswordHandler = useCallback((e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowPassword(prev => !prev)
  }, [])

  const changeInputHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
      onChange?.(e)
    },
    [onChange]
  )

  const clearInputHandler = useCallback(() => {
    setInputValue('')
    updateSearchParam({ search: '' })
  }, [updateSearchParam])

  return (
    <FlexContainer ai={'flex-start'} fd={'column'}>
      {label && (
        <Typography as={'label'} gray>
          {label}
        </Typography>
      )}
      <div className={cn.container}>
        {isSearch && <SearchOutline className={cn.iconSearch} />}
        <input
          className={cn.input}
          disabled={disabled}
          onChange={changeInputHandler}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          value={inputValue}
          {...rest}
        />
        {isPassword && !!inputValue && (
          <Button
            className={cn.eye}
            disabled={disabled}
            onClick={showPasswordHandler}
            variant={'icon'}
          >
            {showPassword ? <EyeOffOutline /> : <EyeOutline />}
          </Button>
        )}
        {isSearch && !!inputValue && (
          <Button className={cn.icon} onClick={clearInputHandler} variant={'icon'}>
            <CloseOutline />
          </Button>
        )}
      </div>
      {helperText && <Typography variant={'error'}>{helperText}</Typography>}
    </FlexContainer>
  )
})
