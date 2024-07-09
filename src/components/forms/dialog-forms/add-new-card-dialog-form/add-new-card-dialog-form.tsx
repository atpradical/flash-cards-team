import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

import { CloseOutline, ImageOutline } from '@/assets/icons'
import dummyCover from '@/assets/webp/dummy-cover.webp'
import {
  Button,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  Image,
  Progress,
  Typography,
} from '@/components/ui/primitives'
import { useCreateCardMutation } from '@/services/flashcards-api'
import { RATIO } from '@/shared/enums'
import { cardAnswerScheme, cardQuestionScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './../dialog-forms.module.scss'

const AddNewCardDialogFormScheme = z.object({
  answer: cardAnswerScheme,
  question: cardQuestionScheme,
})

type AddNewCardDialogFormValues = z.infer<typeof AddNewCardDialogFormScheme>

type AddNewCardDialogFormProps = {
  action?: 'CREATE' | 'UPDATE'
  deckId: string
  onOpenChange: (open: boolean) => void
  onSubmit: () => void
  open: boolean
}

export const AddNewCardDialogForm = ({
  action = 'CREATE',
  deckId,
  onOpenChange,
  onSubmit,
  open,
}: AddNewCardDialogFormProps) => {
  const [createCard, { isLoading }] = useCreateCardMutation()

  const { control, handleSubmit, reset } = useForm<AddNewCardDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(AddNewCardDialogFormScheme),
  })

  const cn = {
    close: clsx(s.close),
    container: clsx(s.container),
    form: clsx(s.form),
    icon: clsx(s.icon),
  }

  const dialogTitle = action === 'CREATE' ? 'Add New Card' : 'Change Card'

  const formHandler = handleSubmit(formData => {
    if (action === 'CREATE') {
      createCard({ ...formData, deckId })
    }
    reset()
    onSubmit()
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
      <DialogContent className={cn.container}>
        <DialogHeader>
          <Typography as={'h3'} variant={'h3'}>
            {dialogTitle}
          </Typography>
          <DialogClose asChild className={cn.close}>
            <CloseOutline />
          </DialogClose>
        </DialogHeader>
        <DialogBody>
          <form className={cn.form} onSubmit={formHandler}>
            <FlexContainer ai={'flex-start'} fd={'column'} gap={'14px'}>
              <Typography variant={'subtitle1'}>Question:</Typography>
              <ControlledTextField
                control={control}
                label={'Question?'}
                name={'question'}
                placeholder={'Write down the question.'}
              />
              <Image alt={'some question'} ratio={RATIO.XL} src={dummyCover} variant={'xl'} />
              <Button as={'button'} fullWidth onClick={uploadImageHandler} variant={'secondary'}>
                <ImageOutline className={cn.icon} />
                Upload image
              </Button>
              <Typography variant={'subtitle1'}>Answer:</Typography>
              <ControlledTextField
                control={control}
                label={'Answer'}
                name={'answer'}
                placeholder={'What is the correct answer to the question?'}
              />
              <Image alt={'some answer'} ratio={RATIO.XL} src={dummyCover} variant={'xl'} />
              <Button as={'button'} fullWidth onClick={uploadImageHandler} variant={'secondary'}>
                <ImageOutline className={cn.icon} />
                Upload image
              </Button>
            </FlexContainer>
          </form>
        </DialogBody>
        <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
          <Button onClick={cancelFormHandler} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={formHandler}>{dialogTitle}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
