import { ComponentPropsWithoutRef, ElementRef, forwardRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Typography } from '@/components/ui/primitives'
import { Tab } from '@/shared/types/common'
import * as RadixTabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tab-switcher.module.scss'

type Props = {
  label?: string
  onTabChange: (tab: string) => void
  tabs: Tab[]
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

type TabSwitcherRef = ElementRef<typeof RadixTabs.Trigger>

export const TabSwitcher = forwardRef<TabSwitcherRef, Props>(
  ({ className, label, onTabChange, tabs, ...rest }, ref) => {
    const cn = useMemo(
      () => ({
        label: s.label,
        root: className,
        tabTitle: s.tabTitle,
        trigger: s.tabsTrigger,
      }),
      [className]
    )

    const [searchParams] = useSearchParams()

    const firstNotDisabledTabValue = useMemo(
      () => tabs.find((tab: Tab) => tab.title === 'All Decks')?.value,
      [tabs]
    )

    const TabsTriggers = useMemo(
      () =>
        tabs.map((tab: Tab, index) => (
          <RadixTabs.Trigger
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
          </RadixTabs.Trigger>
        )),
      [cn, ref, tabs]
    )

    return (
      <RadixTabs.Root
        activationMode={'automatic'}
        className={cn.root}
        defaultValue={firstNotDisabledTabValue}
        onValueChange={onTabChange}
        value={searchParams.get('tab') ?? firstNotDisabledTabValue}
        {...rest}
      >
        {label && (
          <Typography as={'label'} className={cn.label}>
            {label}
          </Typography>
        )}
        <RadixTabs.List>{TabsTriggers}</RadixTabs.List>
      </RadixTabs.Root>
    )
  }
)
