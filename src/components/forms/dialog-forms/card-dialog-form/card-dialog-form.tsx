import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import {
  DialogBody as Body,
  DialogContent as Content,
  Dialog,
  Typography,
} from '@/components/ui/primitives'
import { Card } from '@/services'
import { DIALOG_ACTION } from '@/shared/enums'
import { useCardDialogFormData } from '@/shared/hooks'
import { cardAnswerScheme, cardQuestionScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { z } from 'zod'

import {
  DialogFormFooter as Footer,
  DialogFromHeader as Header,
  DialogFormUploadImage as UploadImage,
} from '../container-components'

export const CardDialogFormScheme = z.object({
  answer: cardAnswerScheme,
  question: cardQuestionScheme,
})

export type CardDialogFormValues = z.infer<typeof CardDialogFormScheme>

type CardDialogFormProps = {
  action?: DIALOG_ACTION
  card?: Card
  onOpenChange: (open: boolean) => void
  onSearchClear?: () => void
  open: boolean
}

export const CardDialogForm = ({
  action = DIALOG_ACTION.CREATE,
  card,
  onOpenChange,
  onSearchClear,
  open,
}: CardDialogFormProps) => {
  const {
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
  } = useCardDialogFormData({ action, card, onOpenChange, onSearchClear })

  return (
    <Dialog modal onOpenChange={onOpenChange} open={open}>
      <Content className={cn.container}>
        <Header load={isLoad} title={title} />
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
