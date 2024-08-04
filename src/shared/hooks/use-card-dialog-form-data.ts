import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { CardDialogFormScheme, CardDialogFormValues } from '@/components/forms'
import { Card, useCreateCardMutation, useUpdateCardMutation } from '@/services'
import { DIALOG_ACTION } from '@/shared/enums'
import { Nullable } from '@/shared/types/common'
import { combineLoadingStates, revokeImageUrl } from '@/shared/utils'
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
      debugger
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

  const { control, handleSubmit, reset } = useForm<CardDialogFormValues>({
    defaultValues: {
      answer: card?.answer,
      question: card?.question,
    },
    mode: 'onSubmit',
    resolver: zodResolver(CardDialogFormScheme),
  })

  const formHandler = handleSubmit(formData => {
    const finalFormData = {
      ...formData,
      ...(typeof answerCover === 'string' ? {} : { answerImg: answerCover }),
      ...(typeof questionCover === 'string' ? {} : { questionImg: questionCover }),
    }

    if (action === 'CREATE') {
      createCard({
        ...finalFormData,
        deckId: deckId ?? '',
      }).then(() => {
        onSearchClear?.()
        setQuestionCover(null)
        setAnswerCover(null)
        cancelFormHandler()
        reset()
      })
    } else {
      updateCard({
        ...finalFormData,
        id: card?.id ?? '',
      }).then(() => {
        setQuestionCover(null)
        setAnswerCover(null)
        cancelFormHandler()
        reset()
      })
    }
  })

  const cancelFormHandler = () => {
    reset()
    onOpenChange(false)
  }

  const uploadQuestionImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      setQuestionCover(file)
    }
  }

  const deleteQuestionImageHandler = () => {
    setQuestionCover(null)
  }

  const uploadAnswerImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      setAnswerCover(file)
    }
  }

  const deleteAnswerImageHandler = () => {
    setAnswerCover(null)
  }

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
