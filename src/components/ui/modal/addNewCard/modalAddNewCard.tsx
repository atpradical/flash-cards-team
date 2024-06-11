import { CloseOutline, ImageOutline } from '@/assets/components/svgIcons'

import s from './modalAddNewDesk.module.scss'

import { Button } from '../../button'
import { Card } from '../../card'
import { TextField } from '../../textField'
import { Typography } from '../../typography'
import { Modal } from '../modal'

export type ModalAddNewDeskProps = {
  addNewPack: () => void
  cancel: () => void
  close: () => void
  open: () => void
  uploadImage: () => void
}

export const ModalAddNewCard = (props: ModalAddNewDeskProps) => {
  const { addNewPack, cancel, close, open, uploadImage } = props

  return (
    <Modal.Root defaultOpen>
      <Modal.Trigger asChild>
        <Button onClick={open}>Open modal</Button>
      </Modal.Trigger>
      <Modal.Content className={s.addNewCard}>
        <Modal.Header>
          <Modal.Title as={'h3'} variant={'h3'}>
            Add new Card
          </Modal.Title>
          <Modal.Close asChild>
            <Button onClick={close} variant={'icon'}>
              <CloseOutline />
            </Button>
          </Modal.Close>
        </Modal.Header>

        <Modal.Description>
          <div className={s.description}>
            <Typography className={s.subtitle2} variant={'subtitle2'}>
              Question:
            </Typography>
            <TextField className={s.textField} label={'Label?'} />
            <Card className={s.card} />

            <Button fullWidth onClick={uploadImage} variant={'secondary'}>
              <ImageOutline className={s.svg} />
              Change image
            </Button>
          </div>
          <div className={s.description}>
            <Typography className={s.subtitle2} variant={'subtitle2'}>
              Answer:
            </Typography>
            <TextField className={s.textField} label={'Label?'} />
            <Card className={s.card} />

            <Button fullWidth onClick={uploadImage} variant={'secondary'}>
              <ImageOutline className={s.svg} />
              Change image
            </Button>
          </div>
        </Modal.Description>

        <Modal.Footer>
          <Modal.Close asChild>
            <Button onClick={cancel} variant={'secondary'}>
              Cancel
            </Button>
          </Modal.Close>
          <Button onClick={addNewPack}>Add New Pack</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  )
}
