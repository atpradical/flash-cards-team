import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Typography } from '../typography'
import clsx from 'clsx'
import s from './modal.module.scss'

const Root = DialogPrimitive.Root
const Trigger = DialogPrimitive.Trigger
const Portal = DialogPrimitive.Portal
const Close = DialogPrimitive.Close

type OverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>

const Overlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, OverlayProps>(
  ({ className, ...props }, ref) => {
    return <DialogPrimitive.Overlay ref={ref} className={clsx(s.overlay, className)} {...props} />
  }
)

type ContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>

const Content = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, ContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Portal>
        <Overlay />
        <DialogPrimitive.Content ref={ref} className={clsx(s.content, className)} {...props}>
          {children}
        </DialogPrimitive.Content>
      </Portal>
    )
  }
)

interface TitleProps
  extends Omit<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>, 'ref'>,
    React.ComponentProps<typeof Typography> {
  as?: React.ElementType
}

const Title = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, TitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <Typography ref={ref} {...props}>
        {children}
      </Typography>
    )
  }
)

type DescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>

const Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Description ref={ref} className={clsx(s.description, className)} {...props}>
      {children}
    </DialogPrimitive.Description>
  )
})

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={clsx(s.header, className)} {...props} />
}

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={clsx(s.footer, className)} {...props} />
}

export const Modal = {
  Root,
  Portal,
  Close,
  Overlay,
  Trigger,
  Content,
  Title,
  Description,
  Footer,
  Header,
}
