import * as React from 'react'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowIosForward, RadioButtonUnchecked } from '@/assets/components/svgIcons'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdown2.module.scss'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

type DropdownMenuTriggerProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
type DropdownMenTriggerRef = ElementRef<typeof DropdownMenuPrimitive.Trigger>
const DropdownMenuTrigger = forwardRef<DropdownMenTriggerRef, DropdownMenuTriggerProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const cn = clsx(className, s.trigger)

    return (
      <DropdownMenuPrimitive.Trigger className={cn} ref={ref} {...rest}>
        {children}
      </DropdownMenuPrimitive.Trigger>
    )
  }
)

DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

type DropdownMenuSubTriggerProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
type DropdownMenSubTriggerRef = ElementRef<typeof DropdownMenuPrimitive.SubTrigger>
const DropdownMenuSubTrigger = forwardRef<DropdownMenSubTriggerRef, DropdownMenuSubTriggerProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const cn = clsx(className)

    return (
      <DropdownMenuPrimitive.SubTrigger className={cn} ref={ref} {...rest}>
        {children}
        <ArrowIosForward />
      </DropdownMenuPrimitive.SubTrigger>
    )
  }
)

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => <DropdownMenuPrimitive.SubContent ref={ref} {...props} />)

DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
type DropdownMenuContentRef = ElementRef<typeof DropdownMenuPrimitive.Content>

const DropdownMenuContent = forwardRef<DropdownMenuContentRef, DropdownMenuContentProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={className} ref={ref} {...rest} />
      </DropdownMenuPrimitive.Portal>
    )
  }
)

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  {
    inset?: boolean
  } & React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, inset, ...props }, ref) => <DropdownMenuPrimitive.Item ref={ref} {...props} />)

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, className, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem ref={ref} {...props}>
    <span className={'absolute left-2 flex h-3.5 w-3.5 items-center justify-center'}>
      <DropdownMenuPrimitive.ItemIndicator>
        <RadioButtonUnchecked />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  {
    inset?: boolean
  } & React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, inset, ...props }, ref) => <DropdownMenuPrimitive.Label ref={ref} {...props} />)

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => <DropdownMenuPrimitive.Separator ref={ref} {...props} />)

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span {...props} />
}

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
