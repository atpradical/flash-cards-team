import { ComponentPropsWithoutRef } from 'react'

import { ArrowIosForward } from '@/assets/components/svgIcons'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

import { Typography } from '../typography'

export type SelectItem = {
  disabled?: boolean
  title: string
  value: string
}

type Props = {
  items?: SelectItem[]
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<any>

export const Select = (props: Props) => {
  const { className, defaultValue, disabled, items, label, placeholder, ...rest } = props

  const classNames = {
    disabled: clsx(s.disabled),
    dropdownArrow: clsx(s.dropdownArrow),
    label: clsx(s.label, disabled && s.disabled),
    placeholder: clsx(s.placeholder),
    selectContent: clsx(s.selectContent),
    selectItem: clsx(s.selectItem),
    selectTrigger: clsx(s.selectTrigger),
  }

  return (
    <RadixSelect.Root defaultValue={defaultValue} disabled={disabled} {...rest}>
      {label && (
        <Typography className={`${classNames.label}`} variant={'body2'}>
          {label}
        </Typography>
      )}
      <RadixSelect.Trigger className={classNames.selectTrigger}>
        <RadixSelect.Value placeholder={placeholder ?? '...'} />
        <RadixSelect.Icon asChild>
          <ArrowIosForward className={classNames.dropdownArrow} />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={classNames.selectContent} position={'popper'}>
          <RadixSelect.Viewport>
            <RadixSelect.Group>
              {items &&
                items.map((item, index) => (
                  <RadixSelect.Item
                    className={`${classNames.selectItem} ${item.disabled && classNames.disabled}`}
                    disabled={item.disabled}
                    key={index}
                    value={item.value}
                  >
                    <RadixSelect.ItemText>{item.title}</RadixSelect.ItemText>
                  </RadixSelect.Item>
                ))}
            </RadixSelect.Group>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
