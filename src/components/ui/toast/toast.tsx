import { CloseOutline } from '@/assets/components/svgIcons'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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
    container: clsx(s.container),
    root: clsx(s.root),
    viewport: clsx(s.viewport),
  }

  return (
    <Toast.Provider>
      <Toast.Root className={cn.root} duration={10000} onOpenChange={onOpenChange} open={open}>
        <Card className={cn.container}>
          <FlexContainer jc={'space-between'}>
            <div>
              <Toast.Title asChild>
                <Typography>Title</Typography>
              </Toast.Title>
              <Toast.Description asChild>
                <Typography>Some description</Typography>
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
