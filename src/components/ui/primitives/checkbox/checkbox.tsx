import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { Typography } from '@/components/ui/primitives'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import s from '@/components/ui/primitives/checkbox/checkbox.module.scss'

export type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
type CheckboxRef = ElementRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  ({ className, disabled, id, label, ...rest }, ref) => {
    const cn = {
      icon: clsx(s.icon, disabled && s.disabled),
      indicator: clsx(s.indicator, disabled && s.disabled),
      label: clsx(s.label, disabled && s.disabled),
      root: clsx(s.root, className),
      wrapper: s.wrapper,
    }
    const generatedId = useId()
    const checkboxId = id || generatedId

    return (
      <RadixCheckbox.Root
        className={cn.root}
        disabled={disabled}
        id={checkboxId}
        ref={ref}
        {...rest}
      >
        <RadixCheckbox.Indicator className={cn.indicator}>
          <CheckIcon className={cn.icon} />
        </RadixCheckbox.Indicator>
        {label && (
          <Typography as={'label'} className={cn.label} htmlFor={checkboxId}>
            {label}
          </Typography>
        )}
      </RadixCheckbox.Root>
    )
  }
)
