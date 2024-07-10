import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

import { CloseOutline, ImageOutline } from '@/assets/icons'
import {
  Button,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  Progress,
  Typography,
} from '@/components/ui/primitives'
import { useCreateDeckMutation } from '@/services/flashcards-api'
import { deckNameScheme, privateDeckScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './../dialog-forms.module.scss'

const AddNewDeckDialogFormScheme = z.object({
  isPrivate: privateDeckScheme,
  name: deckNameScheme,
})

type AddNewDeckDialogFormValues = z.infer<typeof AddNewDeckDialogFormScheme>

type AddNewDeckDialogFormProps = {
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const AddNewDeckDialogForm = ({ onOpenChange, open }: AddNewDeckDialogFormProps) => {
  const [createDeck, { isLoading, isSuccess }] = useCreateDeckMutation()

  const { control, handleSubmit, reset } = useForm<AddNewDeckDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(AddNewDeckDialogFormScheme),
  })

  const cn = {
    close: clsx(s.close),
    container: clsx(s.container),
    form: clsx(s.form),
    icon: clsx(s.icon),
  }

  const formHandler = handleSubmit(formData => {
    createDeck(formData)
    if (isSuccess) {
      reset()
    }
    onOpenChange(open)
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
            Add New Deck
          </Typography>
          <DialogClose asChild className={cn.close}>
            <CloseOutline />
          </DialogClose>
        </DialogHeader>
        <DialogBody>
          <form className={cn.form} onSubmit={formHandler}>
            <FlexContainer ai={'flex-start'} fd={'column'} gap={'24px'}>
              <ControlledTextField
                control={control}
                label={"Deck's Name"}
                name={'name'}
                placeholder={'How should we call your deck?'}
              />
              <Button as={'button'} fullWidth onClick={uploadImageHandler} variant={'secondary'}>
                <ImageOutline className={cn.icon} />
                Upload image
              </Button>
              <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
            </FlexContainer>
          </form>
        </DialogBody>
        <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
          <Button onClick={cancelFormHandler} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={formHandler}>Add New Deck</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
