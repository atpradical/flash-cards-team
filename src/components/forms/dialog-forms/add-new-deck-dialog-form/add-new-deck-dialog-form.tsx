import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

import { CloseOutline, ImageOutline } from '@/assets/components/svgIcons'
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
import { deckNameScheme, privateDeckScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './../dialog-forms.module.scss'

const AddNewDeckDialogFormScheme = z.object({
  deckName: deckNameScheme,
  privateDeck: privateDeckScheme,
})

type AddNewDeckDialogFormValues = z.infer<typeof AddNewDeckDialogFormScheme>

type AddNewDeckDialogFormProps = {
  onOpenChange: (open: boolean) => void
  onSubmit: (data: AddNewDeckDialogFormValues) => void
  open: boolean
}

export const AddNewDeckDialogForm = ({
  onOpenChange,
  onSubmit,
  open,
}: AddNewDeckDialogFormProps) => {
  const { control, handleSubmit } = useForm<AddNewDeckDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(AddNewDeckDialogFormScheme),
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
            <FlexContainer ai={'flex-start'} fd={'column'} gap={'24px'}>
              <ControlledTextField
                control={control}
                label={"Deck's Name"}
                name={'deckName'}
                placeholder={'How should we call your deck?'}
              />
              <Button as={'button'} fullWidth onClick={uploadImageHandler} variant={'secondary'}>
                <ImageOutline className={cn.icon} />
                Upload image
              </Button>
              <ControlledCheckbox control={control} label={'Private deck'} name={'privateDeck'} />
            </FlexContainer>
          </form>
        </DialogBody>
        <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
          <Button onClick={onOpenChange} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={formHandler}>Add New Deck</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
