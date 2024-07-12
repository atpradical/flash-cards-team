import { useForm } from 'react-hook-form'

import {
  DialogFormFooter as Footer,
  DialogFromHeader as Header,
} from '@/components/forms/dialog-forms/container-components'
import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import { DialogDescription as Description, Dialog, DialogContent } from '@/components/ui/primitives'
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
  onSubmit: (data: DeleteDialogFormValues) => void
  open: boolean
}

export const DeleteDialogForm = ({
  entity = DIALOG_ENTITY.DECK,
  entityId,
  name,
  onOpenChange,
  onSubmit,
  open,
}: DeleteDialogFormProps) => {
  const title = `Delete ${entity}`

  const { handleSubmit } = useForm<DeleteDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(DeleteFormScheme),
  })

  const formHandler = handleSubmit(() => {
    onSubmit({ entityId })
  })

  const cancelFormHandler = () => {
    onOpenChange(false)
  }

  return (
    <Dialog modal onOpenChange={onOpenChange} open={open}>
      <DialogContent className={cn.container}>
        <Header title={title} />
        <Description>
          {`Do you really want to remove ${entity}: `}
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
