import { ComponentPropsWithoutRef } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdownItem.module.scss'

type Props = ComponentPropsWithoutRef<typeof RadixDropdown.Item>

export const DropdownItem = (props: Props) => {
  const { className, ...rest } = props
  const cn = { item: clsx(s.item, className) }

  return <RadixDropdown.Item className={cn.item} {...rest} />
}
