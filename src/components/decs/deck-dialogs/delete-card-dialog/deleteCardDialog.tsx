import { CloseOutline } from '@/assets/components/svgIcons'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'

import s from './deleteCardDialog.module.scss'

export type DeleteCardDialogProps = {
  cancel: () => void
  cardName: string
  close: () => void
  deleteCard: () => void
  open: () => void
}

export const DeleteCardDialog = (props: DeleteCardDialogProps) => {
  const { cancel, cardName, close, deleteCard, open } = props

  return (
    <Modal.Root defaultOpen>
      <Modal.Trigger asChild>
        <Button onClick={open}>Open modal</Button>
      </Modal.Trigger>
      <Modal.Content className={s.content}>
        <Modal.Header>
          <Typography as={'h3'} variant={'h3'}>
            Delete Card
          </Typography>
          <Modal.Close asChild>
            <Button onClick={close} variant={'icon'}>
              <CloseOutline />
            </Button>
          </Modal.Close>
        </Modal.Header>

        <Modal.Description>
          <Typography as={'span'}>
            Do you really want to remove <span className={s.subtitle1}>{cardName}</span> ? All cards
            will be deleted.
          </Typography>
        </Modal.Description>

        <Modal.Footer>
          <Modal.Close asChild>
            <Button onClick={cancel} variant={'secondary'}>
              Cancel
            </Button>
          </Modal.Close>
          <Button onClick={deleteCard}>Delete Card</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  )
}
