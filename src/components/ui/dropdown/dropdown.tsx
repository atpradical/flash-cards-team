import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdown.module.scss'

type Props = {
  modal?: boolean
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof RadixDropdown.Root>
type PropsRef = ElementRef<typeof RadixDropdown.Trigger>

export const Dropdown = forwardRef<PropsRef, Props>((props: Props, ref) => {
  const { children, modal, trigger, ...rest } = props
  const cn = {
    arrow: clsx(s.arrow),
    content: clsx(s.menuContent),
    trigger: clsx(s.trigger),
  }

  return (
    <RadixDropdown.Root {...rest}>
      <RadixDropdown.Trigger className={cn.trigger} ref={ref}>
        {trigger}
      </RadixDropdown.Trigger>
      <RadixDropdown.Portal>
        <RadixDropdown.Content className={cn.content}>
          {children}
          <RadixDropdown.Arrow className={cn.arrow} />
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  )
})
