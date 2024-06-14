import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import s from './checkbox.module.scss'

type Props = {
  label?: string
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<CheckboxRef, Props>((props, ref) => {
  const { checked, className, disabled, id, label, onCheckedChange, ...rest } = props
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
      <RadixCheckbox.Root
        className={cn.root}
        defaultChecked
        disabled={disabled}
        id={finalId}
        ref={ref}
        {...rest}
      >
        <RadixCheckbox.Indicator className={cn.indicator}>
          <CheckIcon className={cn.icon} />
        </RadixCheckbox.Indicator>
        {label && (
          <Typography as={'label'} className={cn.label} htmlFor={finalId} variant={'body2'}>
            {label}
          </Typography>
        )}
      </RadixCheckbox.Root>
    </div>
  )
})
