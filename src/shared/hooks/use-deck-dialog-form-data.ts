import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { DeckDialogFormScheme, DeckDialogFormValues } from '@/components/forms'
import { Deck, useCreateDeckMutation, useUpdateDeckMutation } from '@/services'
import { DIALOG_ACTION } from '@/shared/enums'
import { Nullable } from '@/shared/types/common'
import { combineLoadingStates, revokeImageUrl } from '@/shared/utils'
import { zodResolver } from '@hookform/resolvers/zod'

type UseDeckDialogFromData = {
  action?: DIALOG_ACTION
  clearFilters?: () => void
  deck?: Omit<Deck, 'author'>
  onOpenChange: (open: boolean) => void
}

export const useDeckDialogFromData = ({
  action,
  clearFilters,
  deck,
  onOpenChange,
}: UseDeckDialogFromData) => {
  const [cover, setCover] = useState<Nullable<File | string>>(deck?.cover ?? null)
  const [preview, setPreview] = useState<Nullable<string>>(deck?.cover ?? null)

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
  const isLoad = combineLoadingStates(isCreateLoading, isUpdateLoading)

  const { control, handleSubmit, reset } = useForm<DeckDialogFormValues>({
    defaultValues: {
      isPrivate: deck?.isPrivate ?? false,
      name: deck?.name ?? '',
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
      updateDeck({ ...finalFormData, id: deck?.id ?? '' }).then(() => {
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

  return {
    cancelFormHandler,
    control,
    deleteImageHandler,
    formHandler,
    isLoad,
    onOpenChangeHandler,
    preview,
    title,
    uploadImageHandler,
  }
}
