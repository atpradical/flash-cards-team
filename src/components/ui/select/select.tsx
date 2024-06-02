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
  className?: string
  items?: SelectItem[]
  label?: string
  placeholder?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = (props: Props) => {
  const { className, defaultValue, disabled, items, label, placeholder, ...rest } = props

  const cn = {
    disabled: clsx(s.disabled),
    dropdownArrow: clsx(s.dropdownArrow),
    label: clsx(s.label, disabled && s.disabled),
    placeholder: clsx(s.placeholder),
    selectContent: clsx(s.selectContent),
    selectItem: clsx(s.selectItem),
    selectTrigger: clsx(s.selectTrigger, className),
  }

  const selectItems = items?.map(item => (
    <RadixSelect.Item
      className={`${cn.selectItem} ${item.disabled && cn.disabled}`}
      disabled={item.disabled}
      key={item.value}
      value={item.value}
    >
      <RadixSelect.ItemText>
        <Typography as={'span'} variant={'body2'}>
          {item.title}
        </Typography>
      </RadixSelect.ItemText>
    </RadixSelect.Item>
  ))

  return (
    <RadixSelect.Root defaultValue={defaultValue} disabled={disabled} {...rest}>
      {label && (
        <Typography as={'label'} className={cn.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <RadixSelect.Trigger className={cn.selectTrigger}>
        <RadixSelect.Value placeholder={placeholder ?? '...'} />
        <RadixSelect.Icon asChild>
          <ArrowIosForward className={cn.dropdownArrow} />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={cn.selectContent} position={'popper'}>
          <RadixSelect.Viewport>
            <RadixSelect.Group>{selectItems}</RadixSelect.Group>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
