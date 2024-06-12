import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabSwitcher.module.scss'

import { Typography } from '../typography'

export type Tab = {
  disabled?: boolean
  title: string
  value: string
}

type Props = {
  label?: string
  tabs: Tab[]
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = forwardRef<ElementRef<typeof Tabs.Trigger>, Props>(
  ({ className, defaultValue, label, tabs, ...rest }, ref) => {
    const cn = {
      label: clsx(s.label),
      list: clsx(s.tabsList),
      root: clsx(s.tabsRoot, className),
      tabTitle: clsx(s.tabTitle),
      trigger: clsx(s.tabsTrigger),
    }

    const firstNotDisabledTabValue = tabs.find((tab: Tab) => !tab.disabled)?.value

    const TabsTriggers = tabs.map((tab: Tab, index) => (
      <Tabs.Trigger
        className={cn.trigger}
        disabled={tab.disabled}
        key={index + tab.value}
        ref={ref}
        value={tab.value}
      >
        <Typography
          as={'span'}
          className={clsx(cn.tabTitle, tab.disabled && s.disabled)}
          variant={'body1'}
        >
          {tab.title}
        </Typography>
      </Tabs.Trigger>
    ))

    return (
      <Tabs.Root
        activationMode={'automatic'}
        className={cn.root}
        defaultValue={defaultValue ?? firstNotDisabledTabValue}
        {...rest}
      >
        {label && (
          <Typography as={'label'} className={cn.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <Tabs.List className={cn.list}>{TabsTriggers}</Tabs.List>
      </Tabs.Root>
    )
  }
)
