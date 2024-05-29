import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as CheckboxRdx from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

import s from './checkbox.module.scss'

type Props = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRdx.Root>

export const Checkbox = (props: Props) => {
  const { checked, className: string, disabled, label, onCheckedChange, ...rest } = props
  const classNames = {
    icon: clsx(s.icon),
    indicator: clsx(s.indicator),
    label: clsx(s.label),
    root: clsx(s.root),
    wrapper: clsx(s.wrapper),
  }

  return (
    <form>
      <div className={classNames.wrapper}>
        <CheckboxRdx.Root
          checked={checked}
          className={classNames.root}
          defaultChecked
          disabled={disabled}
          id={'c1'}
          {...rest}
        >
          <div className={s.indicator}>
            <CheckboxRdx.Indicator>
              <CheckIcon className={classNames.icon} />
            </CheckboxRdx.Indicator>
            {label && (
              <Typography as={'label'} className={classNames.label} variant={'body2'}>
                {label}
              </Typography>
            )}
          </div>
        </CheckboxRdx.Root>
      </div>
    </form>
  )
}
