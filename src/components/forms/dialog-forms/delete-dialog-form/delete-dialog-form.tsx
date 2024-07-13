import { useForm } from 'react-hook-form'

import {
  DialogFormFooter as Footer,
  DialogFromHeader as Header,
} from '@/components/forms/dialog-forms/container-components'
import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import {
  DialogDescription as Description,
  Dialog,
  DialogContent,
  Progress,
} from '@/components/ui/primitives'
import { useDeleteDeckMutation } from '@/services/flashcards-api'
import { DIALOG_ENTITY } from '@/shared/enums'
import { entityIdScheme } from '@/shared/schemes'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const DeleteFormScheme = z.object({
  entityId: entityIdScheme,
})

type DeleteDialogFormValues = z.infer<typeof DeleteFormScheme>

type DeleteDialogFormProps = {
  entity?: DIALOG_ENTITY
  entityId: string
  name: string
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const DeleteDialogForm = ({
  entity = DIALOG_ENTITY.DECK,
  entityId,
  name,
  onOpenChange,
  open,
}: DeleteDialogFormProps) => {
  const title = `Delete ${entity}`

  const [deleteDeck, { isLoading, isSuccess }] = useDeleteDeckMutation()

  const { handleSubmit, reset } = useForm<DeleteDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(DeleteFormScheme),
  })

  const formHandler = handleSubmit(() => {
    deleteDeck({ id: entityId })
    if (isSuccess) {
      reset()
    }
    onOpenChange(false)
  })

  const cancelFormHandler = () => {
    reset()
    onOpenChange(false)
  }

  return (
    <Dialog modal onOpenChange={onOpenChange} open={open}>
      <DialogContent className={cn.container}>
        <Header title={title} />
        {isLoading && <Progress />}
        <Description>
          {`Do you really want to remove ${entity}:  `}
          <b>{name}</b>
          {`?`}
          <br />
          {entity === DIALOG_ENTITY.DECK ? 'All cards will be deleted.' : ''}
        </Description>
        <form className={cn.form} onSubmit={formHandler}>
          <Footer cancelFormHandler={cancelFormHandler} formHandler={formHandler} title={title} />
        </form>
      </DialogContent>
    </Dialog>
  )
}
