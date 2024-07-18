import { CloseOutline } from '@/assets/icons'
import { Button } from '@/components/ui/primitives'
import { Card } from '@/components/ui/primitives/card'
import { Typography } from '@/components/ui/primitives/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import * as Toast from '@radix-ui/react-toast'
import clsx from 'clsx'

import s from './toast.module.scss'

type ToasterProps = {
  description?: string
  onOpenChange: (open: boolean) => void
  open: boolean
  title: string
  variant?: 'error' | 'success' | 'warning'
}

export const Toaster = ({
  description,
  onOpenChange,
  open,
  title,
  variant = 'warning',
}: ToasterProps) => {
  const cn = {
    button: clsx(s.button, s[variant]),
    container: s.container,
    root: clsx(s.root, s[variant]),
    viewport: clsx(s.viewport),
  }

  return (
    <Toast.Provider>
      <Toast.Root className={cn.root} duration={10000} onOpenChange={onOpenChange} open={open}>
        <Card className={cn.container}>
          <FlexContainer jc={'space-between'}>
            <div>
              <Toast.Title asChild>
                <Typography>{title}</Typography>
              </Toast.Title>
              <Toast.Description asChild>
                <Typography>{description}</Typography>
              </Toast.Description>
            </div>
            <Toast.Close asChild className={cn.button}>
              <Button variant={'icon'}>
                <CloseOutline />
              </Button>
            </Toast.Close>
          </FlexContainer>
        </Card>
      </Toast.Root>
      <Toast.Viewport className={cn.viewport} />
    </Toast.Provider>
  )
}
