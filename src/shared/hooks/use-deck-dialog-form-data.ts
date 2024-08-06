import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { DeckDialogFormScheme, DeckDialogFormValues } from '@/components/forms'
import { Deck, useCreateDeckMutation, useUpdateDeckMutation } from '@/services'
import { DIALOG_ACTION } from '@/shared/enums'
import { useFormErrors } from '@/shared/hooks/use-form-errors'
import { Nullable } from '@/shared/types/common'
import {
  FormErrorData,
  combineLoadingStates,
  getErrorMessageData,
  revokeImageUrl,
} from '@/shared/utils'
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
  const [formErrors, setFromErrors] = useState<Nullable<FormErrorData[] | string>>(null)
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

  const { control, handleSubmit, reset, setError } = useForm<DeckDialogFormValues>({
    defaultValues: {
      isPrivate: deck?.isPrivate ?? false,
      name: deck?.name ?? '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(DeckDialogFormScheme),
  })

  const onOpenChangeHandler = useCallback(
    (open: boolean) => {
      onOpenChange(open)
      if (!open) {
        reset()
      }
    },
    [onOpenChange, reset]
  )

  const formHandler = handleSubmit(async formData => {
    setFromErrors(null)

    const finalFormData = {
      ...formData,
      ...(typeof cover === 'string' ? {} : { cover }),
    }

    const successRequestHandler = () => {
      setCover(null)
      cancelFormHandler()
      reset()
      toast.success(`Deck successfully ${action === DIALOG_ACTION.CREATE ? 'created' : 'updated'}`)
    }

    try {
      if (action === DIALOG_ACTION.CREATE) {
        await createDeck({
          ...finalFormData,
        }).unwrap()
        clearFilters?.()
        successRequestHandler()
      } else {
        await updateDeck({ ...finalFormData, id: deck?.id ?? '' }).unwrap()
        successRequestHandler()
      }
    } catch (e) {
      const errors = getErrorMessageData(e)

      setFromErrors(errors)
    }
  })

  // todo: need review check
  useFormErrors({ errors: formErrors, fields: ['name'], setError })

  const cancelFormHandler = useCallback(() => {
    reset()
    onOpenChange(false)
  }, [reset, onOpenChange])

  const uploadImageHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      setCover(file)
    }
  }, [])

  const deleteImageHandler = useCallback(() => {
    setCover(null)
  }, [])

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
