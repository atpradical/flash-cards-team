import { ComponentPropsWithoutRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabSwitcher.module.scss'

import { Typography } from '../typography'

export type TabType = {
  disabled?: boolean
  title: string
  value: string
}

type TabProps = {
  label?: string
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = ({ className, defaultValue, label, tabs, ...rest }: TabProps) => {
  const classNames = {
    label: clsx(s.label),
    list: clsx(s.tabsList),
    root: clsx(s.tabsRoot, className),
    tabTitle: clsx(s.tabTitle),
    trigger: clsx(s.tabsTrigger),
  }

  const firstNotDisabledTabValue = tabs.find(tab => !tab.disabled)?.value

  return (
    <Tabs.Root
      activationMode={'automatic'}
      className={classNames.root}
      defaultValue={defaultValue ?? firstNotDisabledTabValue}
      {...rest}
    >
      {label && (
        <Typography className={classNames.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <Tabs.List className={classNames.list}>
        {tabs.map(tab => (
          <Tabs.Trigger
            className={classNames.trigger}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            <Typography className={classNames.tabTitle} variant={'body1'}>
              {tab.title}
            </Typography>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
