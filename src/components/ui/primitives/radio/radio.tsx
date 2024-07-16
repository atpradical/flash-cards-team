import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/primitives/typography'
import { Option } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import * as RadixRadio from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './radio.module.scss'

export type RadioProps = {
  options: Option[]
} & ComponentPropsWithoutRef<typeof RadixRadio.Root>
type RadioGroupRef = ElementRef<typeof RadixRadio.Root>

export const Radio = forwardRef<RadioGroupRef, RadioProps>((props, ref) => {
  const { className, disabled, options, ...rest } = props
  const cn = {
    disabled: clsx(s.disabled),
    indicator: clsx(s.indicator),
    item: clsx(s.item),
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root, className),
  }

  const defaultOption = options.find(i => i.defaultValue)?.value || options[0].value

  return (
    <RadixRadio.Root className={cn.root} defaultValue={defaultOption} ref={ref} {...rest}>
      {options.map(i => (
        <FlexContainer key={i.id}>
          <RadixRadio.Item className={cn.item} disabled={i.disabled} id={i.id} value={i.value}>
            <RadixRadio.Indicator className={cn.indicator} />
          </RadixRadio.Item>
          <Typography as={'label'} className={cn.label} htmlFor={i.id}>
            {i.label}
          </Typography>
        </FlexContainer>
      ))}
    </RadixRadio.Root>
  )
})
