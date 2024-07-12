import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

import dummyCover from '@/assets/webp/dummy-cover.webp'
import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import { DialogBody as Body, Dialog, DialogContent, Progress } from '@/components/ui/primitives'
import { useCreateDeckMutation } from '@/services/flashcards-api'
import { DIALOG_ACTION } from '@/shared/enums'
import { deckNameScheme, privateDeckScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  DialogFormFooter as Footer,
  DialogFromHeader as Header,
  DialogFormSection as Section,
} from '../container-components'

const DeckDialogFormScheme = z.object({
  isPrivate: privateDeckScheme,
  name: deckNameScheme,
})

type DeckDialogFormValues = z.infer<typeof DeckDialogFormScheme>

type DeckDialogFormProps = {
  action?: DIALOG_ACTION
  deckId?: string
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const DeckDialogForm = ({
  action = DIALOG_ACTION.CREATE,
  onOpenChange,
  open,
}: DeckDialogFormProps) => {
  const title = action === DIALOG_ACTION.CREATE ? 'Add New Deck' : 'Change Deck'

  const [createDeck, { isLoading, isSuccess }] = useCreateDeckMutation()

  const { control, handleSubmit, reset } = useForm<DeckDialogFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(DeckDialogFormScheme),
  })

  const formHandler = handleSubmit(formData => {
    createDeck(formData)
    if (isSuccess) {
      reset()
    }
    onOpenChange(false)
  })

  const cancelFormHandler = () => {
    reset()
    onOpenChange(false)
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
        <Header title={title} />
        <Body>
          <form className={cn.form} onSubmit={formHandler}>
            <FlexContainer ai={'flex-start'} fd={'column'} gap={'24px'}>
              <Section
                control={control}
                cover={dummyCover}
                label={"Deck's Name?"}
                name={'name'}
                noSubtitle
                placeholder={'How should we call your deck?'}
                uploadImageHandler={uploadImageHandler}
              />
              <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
            </FlexContainer>
          </form>
        </Body>
        <Footer cancelFormHandler={cancelFormHandler} formHandler={formHandler} title={title} />
      </DialogContent>
    </Dialog>
  )
}
