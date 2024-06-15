import { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef } from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './modal.module.scss'

const Root = DialogPrimitive.Root
const Trigger = DialogPrimitive.Trigger
const Portal = DialogPrimitive.Portal
const Close = DialogPrimitive.Close

type OverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
type OverlayRef = ElementRef<typeof DialogPrimitive.Overlay>
const Overlay = forwardRef<OverlayRef, OverlayProps>(({ className, ...rest }, ref) => {
  const cn = clsx(s.overlay, className)

  return <DialogPrimitive.Overlay className={cn} ref={ref} {...rest} />
})

Overlay.displayName = DialogPrimitive.Overlay.displayName

type ContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
type ContentRef = ElementRef<typeof DialogPrimitive.Content>
const Content = forwardRef<ContentRef, ContentProps>(({ className, ...rest }, ref) => {
  const cn = clsx(s.content, className)

  return (
    <Portal>
      <Overlay />
      <DialogPrimitive.Content className={cn} ref={ref} {...rest} />
    </Portal>
  )
})

Content.displayName = DialogPrimitive.Content.displayName

type DescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
type DescriptionRef = ElementRef<typeof DialogPrimitive.Description>
const Description = forwardRef<DescriptionRef, DescriptionProps>(({ className, ...rest }, ref) => {
  const cn = clsx(s.description, className)

  return <DialogPrimitive.Description className={cn} ref={ref} {...rest} />
})

Description.displayName = DialogPrimitive.Description.displayName

type HeaderProps = HTMLAttributes<HTMLDivElement>
const Header = ({ className, ...rest }: HeaderProps) => {
  const cn = clsx(s.header, className)

  return <div className={cn} {...rest} />
}

type FooterProps = HTMLAttributes<HTMLDivElement>
const Footer = ({ className, ...rest }: FooterProps) => {
  const cn = clsx(s.footer, className)

  return <div className={cn} {...rest} />
}

export const Modal = {
  Close,
  Content,
  Description,
  Footer,
  Header,
  Overlay,
  Portal,
  Root,
  Trigger,
}
