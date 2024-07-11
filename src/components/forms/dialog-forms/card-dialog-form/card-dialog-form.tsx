import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

import dummyCover from '@/assets/webp/dummy-cover.webp'
import {
  DialogFormFooter as Footer,
  DialogFromHeader as Header,
  DialogFormSection as Section,
} from '@/components/forms/dialog-forms/container-components'
import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import {
  DialogBody as Body,
  DialogContent as Content,
  Dialog,
  Progress,
} from '@/components/ui/primitives'
import { useCreateCardMutation } from '@/services/flashcards-api'
import { DIALOG_ACTION } from '@/shared/enums'
import { cardAnswerScheme, cardQuestionScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const CardDialogFormScheme = z.object({
  answer: cardAnswerScheme,
  question: cardQuestionScheme,
})

type CardDialogFormValues = z.infer<typeof CardDialogFormScheme>

type CardDialogFormProps = {
  action?: DIALOG_ACTION
  deckId: string
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const CardDialogForm = ({
  action = DIALOG_ACTION.CREATE,
  deckId,
  onOpenChange,
  open,
}: CardDialogFormProps) => {
  const title = action === DIALOG_ACTION.CREATE ? 'Add New Card' : 'Change Card'

  const [createCard, { isLoading, isSuccess }] = useCreateCardMutation()

  const { control, handleSubmit, reset } = useForm<CardDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(CardDialogFormScheme),
  })

  const formHandler = handleSubmit(formData => {
    if (action === 'CREATE') {
      createCard({ ...formData, deckId })
    }
    if (isSuccess) {
      reset()
    }
  })

  const cancelFormHandler = () => {
    reset()
    onOpenChange(open)
  }

  const uploadImageHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  if (isLoading) {
    return <Progress />
  }

  return (
    <Dialog modal onOpenChange={onOpenChange} open={open}>
      <Content className={cn.container}>
        <Header title={title} />
        <Body>
          <form className={cn.form} onSubmit={formHandler}>
            <FlexContainer ai={'flex-start'} fd={'column'} gap={'14px'}>
              <Section
                control={control}
                cover={dummyCover}
                label={'Question?'}
                name={'question'}
                placeholder={'Write down the question.'}
                uploadImageHandler={uploadImageHandler}
              />
              <Section
                control={control}
                cover={dummyCover}
                label={'Answer'}
                name={'answer'}
                placeholder={'What is the correct answer to the question?'}
                uploadImageHandler={uploadImageHandler}
              />
            </FlexContainer>
          </form>
        </Body>
        <Footer cancelFormHandler={cancelFormHandler} formHandler={formHandler} title={title} />
      </Content>
    </Dialog>
  )
}
