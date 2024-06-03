import { ComponentPropsWithoutRef, useId } from 'react'

import { Typography } from '@/components/ui/typography'
import * as CheckboxRdx from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import s from './checkbox.module.scss'

type Props = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRdx.Root>

export const Checkbox = (props: Props) => {
  const { className, disabled, id, label, onCheckedChange, ...rest } = props
  const cn = {
    container: clsx(s.container),
    icon: clsx(s.icon, disabled && s.disabled),
    indicator: clsx(s.indicator, disabled && s.disabled),
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root, className),
    wrapper: clsx(s.wrapper),
  }
  const generatedId = useId()
  const finalId = id || generatedId

  return (
    <div className={cn.container}>
      <CheckboxRdx.Root
        className={cn.root}
        defaultChecked
        disabled={disabled}
        id={finalId}
        {...rest}
      >
        <CheckboxRdx.Indicator className={cn.indicator}>
          <CheckIcon className={cn.icon} />
        </CheckboxRdx.Indicator>
        {label && (
          <Typography as={'label'} className={cn.label} htmlFor={finalId} variant={'body2'}>
            {label}
          </Typography>
        )}
      </CheckboxRdx.Root>
    </div>
  )
}
