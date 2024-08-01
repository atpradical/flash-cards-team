import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import { DialogBody as Body, Dialog, DialogContent } from '@/components/ui/primitives'
import { Deck, GetDeckResponse, useCreateDeckMutation, useUpdateDeckMutation } from '@/services'
import { DIALOG_ACTION } from '@/shared/enums'
import { deckNameScheme, privateDeckScheme } from '@/shared/schemes'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { revokeImageUrl } from '@/shared/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  DialogFormFooter as Footer,
  DialogFromHeader as Header,
  DialogFormUploadImage as UploadImage,
} from '../container-components'

const DeckDialogFormScheme = z.object({
  isPrivate: privateDeckScheme,
  name: deckNameScheme,
})

type DeckDialogFormValues = z.infer<typeof DeckDialogFormScheme>

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
    cover: deckCover,
    id = '',
    isPrivate = false,
    name = '',
  } = deck ?? ({} as GetDeckResponse)

  const [cover, setCover] = useState<Nullable<File | string>>(deckCover ?? null)
  const [preview, setPreview] = useState<Nullable<string>>(deckCover)

  useEffect(() => {
    if (cover && typeof cover !== 'string') {
      const newPreview = URL.createObjectURL(cover)

      revokeImageUrl(preview)
      setPreview(newPreview)

      return () => URL.revokeObjectURL(newPreview)
    }
    // 'preview' mustn't be added to avoid cyclical dependence
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cover])

  const title = action === DIALOG_ACTION.CREATE ? 'Add New Deck' : 'Change Deck'

  const [createDeck, { isLoading: isCreateLoading }] = useCreateDeckMutation()
  const [updateDeck, { isLoading: isUpdateLoading }] = useUpdateDeckMutation()
  const isLoading = isCreateLoading || isUpdateLoading

  const { control, handleSubmit, reset } = useForm<DeckDialogFormValues>({
    defaultValues: {
      isPrivate,
      name,
    },
    mode: 'onSubmit',
    resolver: zodResolver(DeckDialogFormScheme),
  })
  const onOpenChangeHandler = (open: boolean) => {
    onOpenChange(open)
    if (!open) {
      reset()
    }
  }
  const formHandler = handleSubmit(formData => {
    const finalFormData = {
      ...formData,
      ...(typeof cover === 'string' ? {} : { cover }),
    }

    if (action === DIALOG_ACTION.CREATE) {
      createDeck({
        ...finalFormData,
      }).then(() => {
        clearFilters?.()
        setCover(null)
        cancelFormHandler()
        reset()
      })
    } else {
      updateDeck({ ...finalFormData, id }).then(() => {
        setCover(null)
        cancelFormHandler()
        reset()
      })
    }
  })

  const cancelFormHandler = () => {
    reset()
    onOpenChange(false)
  }

  const uploadImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      setCover(file)
    }
  }

  const deleteImageHandler = () => {
    setCover(null)
  }

  return (
    <Dialog modal onOpenChange={onOpenChangeHandler} open={open}>
      <DialogContent className={cn.container}>
        <Header load={isLoading} title={title} />
        <Body>
          <form className={cn.form} onSubmit={formHandler}>
            <FlexContainer ai={'flex-start'} fd={'column'} gap={'24px'}>
              <ControlledTextField
                control={control}
                label={name}
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
