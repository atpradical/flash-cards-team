import { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef } from 'react'

import { FlexContainer } from '@/shared/ui/flex-container'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './dialog.module.scss'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

type DialogOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
type DialogOverlayRef = ElementRef<typeof DialogPrimitive.Overlay>
const DialogOverlay = forwardRef<DialogOverlayRef, DialogOverlayProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(s.overlay, className)

    return <DialogPrimitive.Overlay className={cn} ref={ref} {...rest} />
  }
)

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
type DialogContentRef = ElementRef<typeof DialogPrimitive.Content>
const DialogContent = forwardRef<DialogContentRef, DialogContentProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(s.content, className)

    return (
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content className={cn} ref={ref} {...rest} />
      </DialogPortal>
    )
  }
)

DialogContent.displayName = DialogPrimitive.Content.displayName

type DialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
type DialogDescriptionRef = ElementRef<typeof DialogPrimitive.Description>
const DialogDescription = forwardRef<DialogDescriptionRef, DialogDescriptionProps>(
  ({ className, ...rest }, ref) => {
    const cn = clsx(s.description, className)

    return <DialogPrimitive.Description className={cn} ref={ref} {...rest} />
  }
)

DialogDescription.displayName = DialogPrimitive.Description.displayName

type DialogHeaderProps = {
  flexContainerProps?: ComponentPropsWithoutRef<typeof FlexContainer>
} & HTMLAttributes<HTMLDivElement>
const DialogHeader = ({ children, className, flexContainerProps, ...rest }: DialogHeaderProps) => {
  const cn = clsx(s.header, className)

  return (
    <div className={cn} {...rest}>
      <FlexContainer ai={'center'} jc={'space-between'} {...flexContainerProps}>
        {children}
      </FlexContainer>
    </div>
  )
}

type DialogBodyProps = {
  flexContainerProps?: ComponentPropsWithoutRef<typeof FlexContainer>
} & HTMLAttributes<HTMLDivElement>
const DialogBody = ({ children, className, flexContainerProps, ...rest }: DialogBodyProps) => {
  const cn = clsx(s.body, className)

  return (
    <div className={cn} {...rest}>
      <FlexContainer ai={'flex-start'} fd={'column'} gap={'24px'} {...flexContainerProps}>
        {children}
      </FlexContainer>
    </div>
  )
}

type DialogFooterProps = {
  flexContainerProps?: ComponentPropsWithoutRef<typeof FlexContainer>
} & HTMLAttributes<HTMLDivElement>
const DialogFooter = ({ children, className, flexContainerProps, ...rest }: DialogFooterProps) => {
  const cn = clsx(s.footer, className)

  return (
    <div className={cn} {...rest}>
      <FlexContainer ai={'center'} {...flexContainerProps}>
        {children}
      </FlexContainer>
    </div>
  )
}

export {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
}
