import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import { DialogDescription as Description, Dialog, DialogContent } from '@/components/ui/primitives'
import { DIALOG_ENTITY } from '@/shared/enums'
import { useDeleteDialogFormData } from '@/shared/hooks'
import { entityIdScheme } from '@/shared/schemes'
import { z } from 'zod'

import { DialogFormFooter as Footer, DialogFromHeader as Header } from '../container-components'

export const DeleteFormScheme = z.object({
  entityId: entityIdScheme,
})

export type DeleteDialogFormValues = z.infer<typeof DeleteFormScheme>

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
  const { cancelFormHandler, formHandler, isLoad, title } = useDeleteDialogFormData({
    entity,
    entityId,
    onOpenChange,
  })

  return (
    <Dialog modal onOpenChange={onOpenChange} open={open}>
      <DialogContent className={cn.container}>
        <Header load={isLoad} title={title} />
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
