import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdown.module.scss'

const DropdownMenu = DropdownMenuPrimitive.Root

type DropdownMenuTriggerProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
type DropdownMenTriggerRef = ElementRef<typeof DropdownMenuPrimitive.Trigger>
const DropdownMenuTrigger = forwardRef<DropdownMenTriggerRef, DropdownMenuTriggerProps>(
  ({ children, className, ...rest }, ref) => {
    const cn = clsx(className, s.trigger)

    return (
      <DropdownMenuPrimitive.Trigger className={cn} ref={ref} {...rest}>
        {children}
      </DropdownMenuPrimitive.Trigger>
    )
  }
)

DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
type DropdownMenuContentRef = ElementRef<typeof DropdownMenuPrimitive.Content>

const DropdownMenuContent = forwardRef<DropdownMenuContentRef, DropdownMenuContentProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(className, s.menu)

    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={cn} ref={ref} {...rest} />
      </DropdownMenuPrimitive.Portal>
    )
  }
)

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

type DropdownMenuArrowProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Arrow>
type DropdownMenuArrowRef = ElementRef<typeof DropdownMenuPrimitive.Arrow>
const DropdownMenuArrow = forwardRef<DropdownMenuArrowRef, DropdownMenuArrowProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(className, s.arrow)

    return (
      <DropdownMenuPrimitive.Arrow asChild ref={ref} {...rest}>
        <div className={cn} />
      </DropdownMenuPrimitive.Arrow>
    )
  }
)

DropdownMenuArrow.displayName = DropdownMenuPrimitive.Arrow.displayName

type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
type DropdownMenuLabelRef = ElementRef<typeof DropdownMenuPrimitive.Label>
const DropdownMenuLabel = React.forwardRef<DropdownMenuLabelRef, DropdownMenuLabelProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(className, s.label)

    return <DropdownMenuPrimitive.Label className={cn} ref={ref} {...rest} />
  }
)

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
type DropdownMenuSeparatorRef = ElementRef<typeof DropdownMenuPrimitive.Separator>
const DropdownMenuSeparator = forwardRef<DropdownMenuSeparatorRef, DropdownMenuSeparatorProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(className, s.separator)

    return <DropdownMenuPrimitive.Separator className={cn} ref={ref} {...rest} />
  }
)

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
type DropdownMenuItemRef = ElementRef<typeof DropdownMenuPrimitive.Item>

const DropdownMenuItem = React.forwardRef<DropdownMenuItemRef, DropdownMenuItemProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(className, s.item)

    return <DropdownMenuPrimitive.Item className={cn} ref={ref} {...rest} />
  }
)

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

export {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
