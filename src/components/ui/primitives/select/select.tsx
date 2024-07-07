import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowForward } from '@/assets/components/svgIcons'
import { Typography } from '@/components/ui/primitives/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

export type SelectOption = {
  disabled?: boolean
  title: string
  value: string
}

export type SelectProps = {
  className?: string
  label?: string
  onValueChange: (value: string) => void
  options?: SelectOption[]
  placeholder?: string
  value: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

type SelectRef = ElementRef<typeof RadixSelect.Trigger>

export const Select = forwardRef<SelectRef, SelectProps>(
  (
    {
      className,
      defaultValue,
      disabled,
      label,
      onValueChange,
      options,
      placeholder,
      value,
      ...rest
    },
    ref
  ) => {
    const cn = {
      disabled: clsx(s.disabled),
      dropdownArrow: clsx(s.dropdownArrow),
      label: clsx(s.label, disabled && s.disabled),
      placeholder: clsx(s.placeholder),
      selectContent: clsx(s.selectContent),
      selectOption: clsx(s.selectItem),
      selectTrigger: clsx(s.selectTrigger, className),
    }

    const selectItems = options?.map((option, index) => (
      <RadixSelect.Item
        className={`${cn.selectOption} ${option.disabled && cn.disabled}`}
        disabled={option.disabled}
        key={index + option.value}
        value={option.value}
      >
        <RadixSelect.ItemText>
          <Typography as={'span'}>{option.title}</Typography>
        </RadixSelect.ItemText>
      </RadixSelect.Item>
    ))

    return (
      <RadixSelect.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        value={value}
        {...rest}
      >
        {label && (
          <Typography as={'label'} className={cn.label}>
            {label}
          </Typography>
        )}
        <RadixSelect.Trigger className={cn.selectTrigger} ref={ref}>
          <FlexContainer gap={'5px'} jc={'space-between'}>
            <RadixSelect.Value placeholder={placeholder ?? '...'} />
            <RadixSelect.Icon asChild className={cn.dropdownArrow}>
              <ArrowForward />
            </RadixSelect.Icon>
          </FlexContainer>
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
)
