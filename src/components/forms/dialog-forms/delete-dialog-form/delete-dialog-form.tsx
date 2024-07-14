import { useForm } from 'react-hook-form'

import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import { DialogDescription as Description, Dialog, DialogContent } from '@/components/ui/primitives'
import { useDeleteCardMutation, useDeleteDeckMutation } from '@/services'
import { DIALOG_ENTITY } from '@/shared/enums'
import { entityIdScheme } from '@/shared/schemes'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { DialogFormFooter as Footer, DialogFromHeader as Header } from '../container-components'

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

  const [deleteCard, { isLoading: isLoadingDeleteCard }] = useDeleteCardMutation()
  const [deleteDeck, { isLoading: isLoadingDeleteDeck }] = useDeleteDeckMutation()

  const { handleSubmit } = useForm<DeleteDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(DeleteFormScheme),
  })

  const formHandler = handleSubmit(() => {
    if (entity === DIALOG_ENTITY.CARD) {
      deleteCard({ id: entityId }).then(() => cancelFormHandler())
    }
    deleteDeck({ id: entityId }).then(() => cancelFormHandler())
  })

  const cancelFormHandler = () => {
    onOpenChange(false)
  }

  const isLoading = isLoadingDeleteCard || isLoadingDeleteDeck

  return (
    <Dialog modal onOpenChange={onOpenChange} open={open}>
      <DialogContent className={cn.container}>
        <Header load={isLoading} title={title} />
        <Description>
          {`Do you really want to remove ${entity}:  `}
          <b>{name}</b>
          {`?`}
          <br />
          {entity === DIALOG_ENTITY.DECK ? 'All cards will be deleted.' : ''}
        </Description>
        <form className={cn.form} onSubmit={formHandler}>
          <Footer onCancel={cancelFormHandler} onSubmit={formHandler} title={title} />
        </form>
      </DialogContent>
    </Dialog>
  )
}
