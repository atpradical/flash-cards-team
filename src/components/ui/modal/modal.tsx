import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  HTMLAttributes,
  forwardRef,
} from 'react'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './modal.module.scss'

import { Typography, TypographyProps } from '../typography'

const Root = DialogPrimitive.Root
const Trigger = DialogPrimitive.Trigger
const Portal = DialogPrimitive.Portal
const Close = DialogPrimitive.Close

type OverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
const Overlay = forwardRef<ElementRef<typeof DialogPrimitive.Overlay>, OverlayProps>(
  ({ className, ...rest }, ref) => {
    const cn = {
      overlay: clsx(s.overlay, className),
    }

    return <DialogPrimitive.Overlay className={cn.overlay} ref={ref} {...rest} />
  }
)

Overlay.displayName = DialogPrimitive.Overlay.displayName

type ContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
const Content = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ContentProps>(
  ({ children, className, ...rest }, ref) => {
    const cn = {
      content: clsx(s.content, className),
    }

    return (
      <Portal>
        <Overlay />
        <DialogPrimitive.Content className={cn.content} ref={ref} {...rest}>
          {children}
        </DialogPrimitive.Content>
      </Portal>
    )
  }
)

Content.displayName = DialogPrimitive.Content.displayName

type TitleProps<T extends ElementType> = Omit<ComponentProps<typeof DialogPrimitive.Title>, 'ref'> &
  TypographyProps<T>
const Title = forwardRef<ElementRef<typeof DialogPrimitive.Title>, TitleProps<ElementType>>(
  ({ children, ...rest }, ref) => {
    return (
      <Typography ref={ref} {...rest}>
        {children}
      </Typography>
    )
  }
)

Title.displayName = DialogPrimitive.Title.displayName

type DescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
const Description = forwardRef<ElementRef<typeof DialogPrimitive.Description>, DescriptionProps>(
  ({ children, className, ...rest }, ref) => {
    const cn = {
      description: clsx(s.description, className),
    }

    return (
      <DialogPrimitive.Description className={cn.description} ref={ref} {...rest}>
        {children}
      </DialogPrimitive.Description>
    )
  }
)

Description.displayName = DialogPrimitive.Description.displayName

type HeaderProps = HTMLAttributes<HTMLDivElement>
const Header = ({ className, ...rest }: HeaderProps) => {
  const cn = {
    header: clsx(s.header, className),
  }

  return <div className={cn.header} {...rest} />
}

type FooterProps = HTMLAttributes<HTMLDivElement>
const Footer = ({ className, ...rest }: FooterProps) => {
  const cn = {
    footer: clsx(s.footer, className),
  }

  return <div className={cn.footer} {...rest} />
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
  Title,
  Trigger,
}
