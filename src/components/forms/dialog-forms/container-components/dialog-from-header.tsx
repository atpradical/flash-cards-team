import { CloseOutline } from '@/assets/icons'
import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import { DialogClose, DialogHeader, Progress, Typography } from '@/components/ui/primitives'

type Props = {
  load?: boolean
  title: string
}
export const DialogFromHeader = ({ load = false, title }: Props) => {
  return (
    <>
      <DialogHeader>
        <Typography as={'h3'} variant={'h3'}>
          {title}
        </Typography>
        <DialogClose asChild className={cn.close}>
          <CloseOutline />
        </DialogClose>
      </DialogHeader>
      {load && <Progress />}
    </>
  )
}
