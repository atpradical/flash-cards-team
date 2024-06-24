import { CloseOutline } from '@/assets/components/svgIcons'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import * as Toast from '@radix-ui/react-toast'
import clsx from 'clsx'

import s from './toast.module.scss'

type ToasterProps = {
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const Toaster = ({ onOpenChange, open }: ToasterProps) => {
  const cn = {
    button: clsx(s.button),
    description: clsx(s.description),
    root: clsx(s.root),
    title: clsx(s.title),
    viewport: clsx(s.viewport),
  }

  return (
    <Toast.Provider swipeDirection={'right'}>
      <FlexContainer gap={'16px'}>
        <Toast.Root className={cn.root} duration={10000} onOpenChange={onOpenChange} open={open}>
          <Toast.Title className={cn.title}>Title</Toast.Title>
          <Toast.Description asChild className={cn.description}>
            <Typography variant={'caption'}>Some description</Typography>
          </Toast.Description>
          <Toast.Close asChild className={cn.button}>
            <Button variant={'icon'}>
              <CloseOutline />
            </Button>
          </Toast.Close>
        </Toast.Root>
        <FlexContainer fd={'column'} gap={'10px'}>
          <Toast.Viewport className={cn.viewport} />
        </FlexContainer>
      </FlexContainer>
    </Toast.Provider>
  )
}
