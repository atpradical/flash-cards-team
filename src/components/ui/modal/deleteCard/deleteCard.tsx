import { CloseOutline } from '@/assets/components/svgIcons'

import s from './deleteCard.module.scss'

import { Button } from '../../button'
import { Typography } from '../../typography'
import { Modal } from '../modal'

export type ModalDeleteCardProps = {
  cancel: () => void
  cardName: string
  close: () => void
  deleteCard: () => void
  open: () => void
}

export const ModalDeleteCard = (props: ModalDeleteCardProps) => {
  const { cancel, cardName, close, deleteCard, open } = props

  return (
    <Modal.Root defaultOpen>
      <Modal.Trigger asChild>
        <Button onClick={open}>Open modal</Button>
      </Modal.Trigger>
      <Modal.Content className={s.deleteCard}>
        <Modal.Header>
          <Modal.Title as={'h3'} variant={'h3'}>
            Delete Card
          </Modal.Title>
          <Modal.Close asChild>
            <Button onClick={close} variant={'icon'}>
              <CloseOutline />
            </Button>
          </Modal.Close>
        </Modal.Header>

        <Modal.Description>
          <Typography variant={'body2'}>
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
