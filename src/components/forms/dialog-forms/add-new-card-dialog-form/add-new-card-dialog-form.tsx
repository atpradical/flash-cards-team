import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

import { CloseOutline, ImageOutline } from '@/assets/components/svgIcons'
import dummyImage from '@/assets/webp/cover-default.webp'
import { ASPECT_RATIO } from '@/common/enums/aspect-ratio'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'
import { Typography } from '@/components/ui/typography'
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
  onOpenChange: (open: boolean) => void
  onSubmit: (data: AddNewCardDialogFormValues) => void
  open: boolean
}

export const AddNewCardDialogForm = ({
  onOpenChange,
  onSubmit,
  open,
}: AddNewCardDialogFormProps) => {
  const { control, handleSubmit } = useForm<AddNewCardDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(AddNewCardDialogFormScheme),
  })

  const cn = {
    close: clsx(s.close),
    container: clsx(s.container),
    form: clsx(s.form),
    icon: clsx(s.icon),
  }

  const formHandler = handleSubmit(data => {
    onSubmit(data)
  })

  const uploadImageHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <Dialog modal onOpenChange={onOpenChange} open={open}>
      <DialogContent className={cn.container}>
        <DialogHeader>
          <Typography as={'h3'} variant={'h3'}>
            Add New Deck
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
              <AspectRatio ratio={ASPECT_RATIO.ExtraWide} variant={'xl'}>
                <img alt={'some question'} src={dummyImage} />
              </AspectRatio>

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
              <AspectRatio ratio={ASPECT_RATIO.ExtraWide} variant={'xl'}>
                <img alt={'some answer'} src={dummyImage} />
              </AspectRatio>
              <Button as={'button'} fullWidth onClick={uploadImageHandler} variant={'secondary'}>
                <ImageOutline className={cn.icon} />
                Upload image
              </Button>
            </FlexContainer>
          </form>
        </DialogBody>
        <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
          <Button onClick={onOpenChange} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={formHandler}>Add New Card</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
