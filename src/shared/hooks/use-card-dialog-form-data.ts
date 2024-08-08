import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardDialogFormScheme, CardDialogFormValues } from '@/components/forms'
import { Card, useCreateCardMutation, useUpdateCardMutation } from '@/services'
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

type UseCardDialogFormData = {
  action?: DIALOG_ACTION
  card?: Card
  onOpenChange: (open: boolean) => void
  onSearchClear?: () => void
}

export const useCardDialogFormData = ({
  action,
  card,
  onOpenChange,
  onSearchClear,
}: UseCardDialogFormData) => {
  const [formErrors, setFromErrors] = useState<Nullable<FormErrorData[] | string>>(null)
  const [questionCover, setQuestionCover] = useState<Nullable<File | string>>(
    card?.questionImg ?? null
  )
  const [answerCover, setAnswerCover] = useState<Nullable<File | string>>(card?.answerImg ?? null)
  const [questionPreview, setQuestionPreview] = useState<Nullable<string>>(
    card?.questionImg ?? null
  )
  const [answerPreview, setAnswerPreview] = useState<Nullable<string>>(card?.answerImg ?? null)

  useEffect(() => {
    if (questionCover && typeof questionCover !== 'string') {
      const newPreview = URL.createObjectURL(questionCover)

      revokeImageUrl(questionPreview)
      setQuestionPreview(newPreview)

      return () => URL.revokeObjectURL(newPreview)
    }

    // 'previews' mustn't be added to avoid cyclical dependence
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionCover])

  useEffect(() => {
    if (answerCover && typeof answerCover !== 'string') {
      const newPreview = URL.createObjectURL(answerCover)

      revokeImageUrl(answerPreview)
      setAnswerPreview(newPreview)

      return () => URL.revokeObjectURL(newPreview)
    }
    // 'previews' mustn't be added to avoid cyclical dependence
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answerCover])

  const title = action === DIALOG_ACTION.CREATE ? 'Create Card' : 'Change Card'

  const { deckId } = useParams()

  const [createCard, { isLoading: isLoadingCreateCard }] = useCreateCardMutation()
  const [updateCard, { isLoading: isLoadingUpdateCard }] = useUpdateCardMutation()

  const { control, handleSubmit, reset, setError } = useForm<CardDialogFormValues>({
    defaultValues: {
      answer: card?.answer,
      question: card?.question,
    },
    mode: 'onSubmit',
    resolver: zodResolver(CardDialogFormScheme),
  })

  const cancelFormHandler = useCallback(() => {
    reset()
    onOpenChange(false)
  }, [reset, onOpenChange])

  const successRequestHandler = useCallback(() => {
    setQuestionCover(null)
    setAnswerCover(null)
    cancelFormHandler()
    reset()
    toast.success(`Card successfully ${action === DIALOG_ACTION.CREATE ? 'created' : 'updated'}`)
  }, [action, cancelFormHandler, reset])

  const formHandler = handleSubmit(async formData => {
    setFromErrors(null)
    const finalFormData = {
      ...formData,
      ...(typeof answerCover === 'string' ? {} : { answerImg: answerCover }),
      ...(typeof questionCover === 'string' ? {} : { questionImg: questionCover }),
    }

    try {
      if (action === 'CREATE') {
        await createCard({
          ...finalFormData,
          deckId: deckId ?? '',
        }).unwrap()
        onSearchClear?.()
        successRequestHandler()
      } else {
        await updateCard({
          ...finalFormData,
          id: card?.id ?? '',
        }).unwrap()
        successRequestHandler()
      }
    } catch (e) {
      const errors = getErrorMessageData(e)

      setFromErrors(errors)
    }
  })

  useFormErrors({ errors: formErrors, fields: ['answer', 'question'], setError })

  const uploadQuestionImageHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      setQuestionCover(file)
    }
  }, [])

  const deleteQuestionImageHandler = useCallback(() => {
    setQuestionCover(null)
  }, [])

  const uploadAnswerImageHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      setAnswerCover(file)
    }
  }, [])

  const deleteAnswerImageHandler = useCallback(() => {
    setAnswerCover(null)
  }, [])

  const isLoad = combineLoadingStates(isLoadingCreateCard, isLoadingUpdateCard)

  return {
    answerPreview,
    cancelFormHandler,
    control,
    deleteAnswerImageHandler,
    deleteQuestionImageHandler,
    formHandler,
    isLoad,
    questionPreview,
    title,
    uploadAnswerImageHandler,
    uploadQuestionImageHandler,
  }
}
