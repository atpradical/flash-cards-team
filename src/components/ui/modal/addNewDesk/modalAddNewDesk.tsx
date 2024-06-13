import { CloseOutline, ImageOutline } from '@/assets/components/svgIcons'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field'

import s from './modalAddNewDesk.module.scss'

import { Modal } from '../modal'

export type ModalAddNewDeskProps = {
  addNewPack: () => void
  cancel: () => void
  changeCheckbox: () => void
  close: () => void
  open: () => void
  uploadImage: () => void
}

export const ModalAddNewDesk = (props: ModalAddNewDeskProps) => {
  const { addNewPack, cancel, changeCheckbox, close, open, uploadImage } = props

  return (
    <Modal.Root defaultOpen>
      <Modal.Trigger asChild>
        <Button onClick={open}>Open modal</Button>
      </Modal.Trigger>
      <Modal.Content className={s.addNewDesk}>
        <Modal.Header>
          <Modal.Title as={'h3'} variant={'h3'}>
            Add new Desk
          </Modal.Title>
          <Modal.Close asChild>
            <Button onClick={close} variant={'icon'}>
              <CloseOutline />
            </Button>
          </Modal.Close>
        </Modal.Header>

        <Modal.Description>
          <TextField className={s.textField} label={'Label'} />
          <Button fullWidth onClick={uploadImage} variant={'secondary'}>
            <ImageOutline />
            Upload image
          </Button>
          <Checkbox label={'Private pack'} onClick={changeCheckbox} />
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
