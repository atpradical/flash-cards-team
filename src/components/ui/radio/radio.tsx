import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixRadio from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './radio.module.scss'

export type Item = {
  defaultValue?: boolean
  disabled?: boolean
  id: string
  label: string
  value: string
}

type Props = {
  items: Item[]
} & ComponentPropsWithoutRef<typeof RadixRadio.Root>

export const Radio = (props: Props) => {
  const { disabled, items, ...rest } = props
  const cn = {
    disabled: clsx(s.disabled),
    indicator: clsx(s.indicator),
    item: clsx(s.item),
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root),
    wrapper: clsx(s.wrapper),
  }

  const defaultPick = items.find(i => i.defaultValue)?.value || items[0].value

  return (
    <RadixRadio.Root className={cn.root} defaultValue={defaultPick} {...rest}>
      {items.map(i => (
        <div className={cn.wrapper} key={i.id}>
          <RadixRadio.Item className={cn.item} disabled={i.disabled} id={i.id} value={i.value}>
            <RadixRadio.Indicator className={cn.indicator} />
          </RadixRadio.Item>
          <Typography
            as={'label'}
            className={clsx(cn.label, i.disabled && cn.disabled)}
            htmlFor={i.id}
            variant={'body2'}
          >
            {i.label}
          </Typography>
        </div>
      ))}
    </RadixRadio.Root>
  )
}
