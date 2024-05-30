import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixRadio from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './radio.module.scss'

type item = {
  defaultValue?: boolean
  disabled?: boolean
  id: string
  label: string
  value: number
}

type Props = {
  items: item[]
} & ComponentPropsWithoutRef<typeof RadixRadio.Root>

export const Radio = (props: Props) => {
  const { items } = props
  const classNames = {
    indicator: clsx(s.indicator),
    item: clsx(s.item),
    label: clsx(s.label),
    radioWrapper: clsx(s.radioWrapper),
    root: clsx(s.root),
  }

  //const defaultPick = items.find(i => i?.defaultValue) || items[0]
  return (
    <form>
      <RadixRadio.Root className={classNames.root} defaultValue={'1'}>
        {items.map(i => {
          return (
            <div className={classNames.radioWrapper} key={i.id}>
              <RadixRadio.Item
                className={classNames.item}
                disabled={i.disabled}
                id={i.id}
                value={i.value.toString()}
              >
                <RadixRadio.Indicator className={classNames.indicator} />
              </RadixRadio.Item>
              <Typography
                as={'label'}
                className={classNames.label}
                htmlFor={i.id}
                variant={'body2'}
              >
                {i.label}
              </Typography>
            </div>
          )
        })}
      </RadixRadio.Root>
    </form>
  )
}
