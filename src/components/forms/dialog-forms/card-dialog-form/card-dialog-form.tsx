import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  DialogBody as Body,
  DialogContent as Content,
  Dialog,
  Typography,
} from '@/components/ui/primitives'
import { Card, useCreateCardMutation, useUpdateCardMutation } from '@/services'
import { DIALOG_ACTION } from '@/shared/enums'
import { useCurrentPage, useSearchParamUpdater } from '@/shared/hooks'
import { cardAnswerScheme, cardQuestionScheme } from '@/shared/schemes'
import { Nullable } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  DialogFormFooter as Footer,
  DialogFromHeader as Header,
  DialogFormUploadImage as UploadImage,
} from '../container-components'
import { cn } from './../dialog-forms.styles'

const CardDialogFormScheme = z.object({
  answer: cardAnswerScheme,
  question: cardQuestionScheme,
})

type CardDialogFormValues = { cover?: File | null } & z.infer<typeof CardDialogFormScheme>

type CardDialogFormProps = {
  action?: DIALOG_ACTION
  card?: Card
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const CardDialogForm = ({
  action = DIALOG_ACTION.CREATE,
  card,
  onOpenChange,
  open,
}: CardDialogFormProps) => {
  const [questionCover, setQuestionCover] = useState<Nullable<File | string>>(
    card?.questionImg ?? null
  )
  const [answerCover, setAnswerCover] = useState<Nullable<File | string>>(card?.answerImg ?? null)
  const [questionPreview, setQuestionPreview] = useState<Nullable<string>>(card?.questionImg ?? '')
  const [answerPreview, setAnswerPreview] = useState<Nullable<string>>(card?.answerImg ?? '')

  const currentPage = useCurrentPage()
  const updateSearchParam = useSearchParamUpdater()

  useEffect(() => {
    if (questionCover && typeof questionCover !== 'string') {
      const newPreview = URL.createObjectURL(questionCover)

      if (questionPreview) {
        URL.revokeObjectURL(questionPreview)
      }
      setQuestionPreview(newPreview)

      return () => URL.revokeObjectURL(newPreview)
    }

    // 'previews' mustn't be added to avoid cyclical dependence
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionCover])

  useEffect(() => {
    if (answerCover && typeof answerCover !== 'string') {
      const newPreview = URL.createObjectURL(answerCover)

      if (answerPreview) {
        URL.revokeObjectURL(answerPreview)
      }
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
    const hasChanges =
      formData.question !== card?.question ||
      formData.answer !== card?.answer ||
      (typeof answerCover !== 'string' && answerCover !== card.answerImg) ||
      (typeof questionCover !== 'string' && questionCover !== card.questionImg)

    if (!hasChanges) {
      cancelFormHandler()
      toast.info('No changes detected')

      return
    }

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
        if (currentPage !== 1) {
          updateSearchParam({ currentPage: 1 })
        }
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
        if (currentPage !== 1) {
          updateSearchParam({ currentPage: 1 })
        }
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

  const isLoading = isLoadingCreateCard || isLoadingUpdateCard

  return (
    <Dialog modal onOpenChange={onOpenChange} open={open}>
      <Content className={cn.container}>
        <Header load={isLoading} title={title} />
        <Body>
          <form className={cn.form} onSubmit={formHandler}>
            <FlexContainer ai={'flex-start'} fd={'column'} gap={'14px'}>
              <Typography variant={'subtitle1'}>{`Question:`}</Typography>
              <ControlledTextField
                control={control}
                label={'Question?'}
                name={'question'}
                placeholder={'Write down the question'}
              />
              <UploadImage
                action={action}
                onDelete={deleteQuestionImageHandler}
                onUpload={uploadQuestionImageHandler}
                preview={questionPreview}
              />
              <Typography variant={'subtitle1'}>{`Answer:`}</Typography>
              <ControlledTextField
                control={control}
                label={'Answer'}
                name={'answer'}
                placeholder={'What is the correct answer to the question?'}
              />
              <UploadImage
                action={action}
                onDelete={deleteAnswerImageHandler}
                onUpload={uploadAnswerImageHandler}
                preview={answerPreview}
              />
            </FlexContainer>
          </form>
        </Body>
        <Footer onCancel={cancelFormHandler} onSubmit={formHandler} title={title} />
      </Content>
    </Dialog>
  )
}
