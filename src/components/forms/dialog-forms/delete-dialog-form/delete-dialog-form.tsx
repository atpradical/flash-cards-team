import { useForm } from 'react-hook-form'

import {
  DialogFormFooter as Footer,
  DialogFromHeader as Header,
} from '@/components/forms/dialog-forms/container-components'
import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import { DialogDescription as Description, Dialog, DialogContent } from '@/components/ui/primitives'
import { entityIdScheme } from '@/shared/schemes'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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
  const title = `Delete ${entity}`

  const { handleSubmit } = useForm<DeleteDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(DeleteFormScheme),
  })

  const formHandler = handleSubmit(() => {
    onSubmit({ entityId: id })
  })

  const cancelFormHandler = () => {
    onOpenChange(open)
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
          {entity === 'Deck' ? 'All cards will be deleted.' : ''}
        </Description>
        <form className={cn.form} onSubmit={formHandler}>
          <Footer cancelFormHandler={cancelFormHandler} formHandler={formHandler} title={title} />
        </form>
      </DialogContent>
    </Dialog>
  )
}
