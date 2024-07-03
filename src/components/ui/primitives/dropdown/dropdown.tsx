import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdown.module.scss'

const Root = DropdownMenuPrimitive.Root
const Trigger = DropdownMenuPrimitive.Trigger

type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
type DropdownMenuContentRef = ElementRef<typeof DropdownMenuPrimitive.Content>

const Content = forwardRef<DropdownMenuContentRef, DropdownMenuContentProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(s.menu, className)

    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={cn} ref={ref} {...rest} />
      </DropdownMenuPrimitive.Portal>
    )
  }
)

Content.displayName = DropdownMenuPrimitive.Content.displayName

type DropdownMenuArrowProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Arrow>
const Arrow = ({ className, ...rest }: DropdownMenuArrowProps) => {
  const cn = clsx(s.arrow, className)

  return (
    <DropdownMenuPrimitive.Arrow asChild {...rest}>
      <div className={cn} />
    </DropdownMenuPrimitive.Arrow>
  )
}

Arrow.displayName = DropdownMenuPrimitive.Arrow.displayName

type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
type DropdownMenuLabelRef = ElementRef<typeof DropdownMenuPrimitive.Label>
const Label = React.forwardRef<DropdownMenuLabelRef, DropdownMenuLabelProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(s.label, className)

    return <DropdownMenuPrimitive.Label className={cn} ref={ref} {...rest} />
  }
)

Label.displayName = DropdownMenuPrimitive.Label.displayName

type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
type DropdownMenuSeparatorRef = ElementRef<typeof DropdownMenuPrimitive.Separator>
const Separator = forwardRef<DropdownMenuSeparatorRef, DropdownMenuSeparatorProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(s.separator, className)

    return <DropdownMenuPrimitive.Separator className={cn} ref={ref} {...rest} />
  }
)

Separator.displayName = DropdownMenuPrimitive.Separator.displayName

type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
type DropdownMenuItemRef = ElementRef<typeof DropdownMenuPrimitive.Item>

const Item = React.forwardRef<DropdownMenuItemRef, DropdownMenuItemProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(s.item, className)

    return <DropdownMenuPrimitive.Item className={cn} ref={ref} {...rest} />
  }
)

Item.displayName = DropdownMenuPrimitive.Item.displayName

export { Arrow, Content, Item, Label, Root, Separator, Trigger }
