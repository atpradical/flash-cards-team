import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import { DialogBody as Body, Dialog, DialogContent } from '@/components/ui/primitives'
import { Deck } from '@/services'
import { DIALOG_ACTION } from '@/shared/enums'
import { useDeckDialogFromData } from '@/shared/hooks'
import { deckNameScheme, privateDeckScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { z } from 'zod'

import {
  DialogFormFooter as Footer,
  DialogFromHeader as Header,
  DialogFormUploadImage as UploadImage,
} from '../container-components'

export const DeckDialogFormScheme = z.object({
  isPrivate: privateDeckScheme,
  name: deckNameScheme,
})

export type DeckDialogFormValues = z.infer<typeof DeckDialogFormScheme>

type DeckDialogFormProps = {
  action?: DIALOG_ACTION
  clearFilters?: () => void
  deck?: Omit<Deck, 'author'>
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const DeckDialogForm = ({
  action = DIALOG_ACTION.CREATE,
  clearFilters,
  deck,
  onOpenChange,
  open,
}: DeckDialogFormProps) => {
  const {
    cancelFormHandler,
    control,
    deleteImageHandler,
    formHandler,
    isLoad,
    onOpenChangeHandler,
    preview,
    title,
    uploadImageHandler,
  } = useDeckDialogFromData({ action, clearFilters, deck, onOpenChange })

  return (
    <Dialog modal onOpenChange={onOpenChangeHandler} open={open}>
      <DialogContent className={cn.container}>
        <Header load={isLoad} title={title} />
        <Body>
          <form className={cn.form} onSubmit={formHandler}>
            <FlexContainer ai={'flex-start'} fd={'column'} gap={'24px'}>
              <ControlledTextField
                control={control}
                label={deck?.name}
                name={'name'}
                placeholder={'How should we call your deck?'}
              />
              <UploadImage
                action={action}
                onDelete={deleteImageHandler}
                onUpload={uploadImageHandler}
                preview={preview}
              />
              <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
            </FlexContainer>
          </form>
        </Body>
        <Footer onCancel={cancelFormHandler} onSubmit={formHandler} title={title} />
      </DialogContent>
    </Dialog>
  )
}
