import { useForm } from 'react-hook-form'

import { CloseOutline } from '@/assets/components/svgIcons'
import { entityIdScheme } from '@/shared/schemes'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './../dialog-forms.module.scss'

import { Button } from '../../../ui/primitives/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from '../../../ui/primitives/dialog'
import { Typography } from '../../../ui/primitives/typography'

const DeleteFormScheme = z.object({
  entityId: entityIdScheme,
})

type DeleteDialogFormValues = z.infer<typeof DeleteFormScheme>

type DeleteDialogFormProps = {
  entity: 'Card' | 'Deck'
  id: string
  name: string
  onOpenChange: (open: boolean) => void
  onSubmit: (data: DeleteDialogFormValues) => void
  open: boolean
}

export const DeleteDialogForm = ({
  entity,
  id,
  name,
  onOpenChange,
  onSubmit,
  open,
}: DeleteDialogFormProps) => {
  const { handleSubmit } = useForm<DeleteDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(DeleteFormScheme),
  })

  const cn = {
    close: clsx(s.close),
    container: clsx(s.container),
    form: clsx(s.form),
  }

  const formHandler = handleSubmit(() => {
    onSubmit({ entityId: id })
  })

  const descriptionMessage = (
    <DialogDescription>
      {`Do you really want to remove ${entity}: `}
      <b>{name}</b>
      {`?`}
      <br />
      {entity === 'Deck' ? 'All cards will be deleted.' : ''}
    </DialogDescription>
  )

  return (
    <Dialog modal onOpenChange={onOpenChange} open={open}>
      <DialogContent className={cn.container}>
        <DialogHeader>
          <Typography as={'h3'} variant={'h3'}>
            {`Delete ${entity}`}
          </Typography>
          <DialogClose asChild className={cn.close}>
            <CloseOutline />
          </DialogClose>
        </DialogHeader>
        {descriptionMessage}
        <form className={cn.form} onSubmit={formHandler}>
          <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
            <Button onClick={onOpenChange} type={'button'} variant={'secondary'}>
              Cancel
            </Button>
            <Button>Delete Card</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
