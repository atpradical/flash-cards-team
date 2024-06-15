import { CloseOutline, ImageOutline } from '@/assets/components/svgIcons'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field'

import s from './addNewDeckDialog.module.scss'

import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'

export type AddNewDeckDialogProps = {
  addNewPack: () => void
  cancel: () => void
  changeCheckbox: () => void
  close: () => void
  open: () => void
  uploadImage: () => void
}

export const AddNewDeckDialog = (props: AddNewDeckDialogProps) => {
  const { addNewPack, cancel, changeCheckbox, close, open, uploadImage } = props

  return (
    <Modal.Root defaultOpen>
      <Modal.Trigger asChild>
        <Button onClick={open}>Open modal</Button>
      </Modal.Trigger>
      <Modal.Content className={s.addNewDesk}>
        <Modal.Header>
          <Typography as={'h3'} variant={'h3'}>
            Add new Deck
          </Typography>
          <Modal.Close asChild>
            <Button onClick={close} variant={'icon'}>
              <CloseOutline />
            </Button>
          </Modal.Close>
        </Modal.Header>

        <div className={s.description}>
          <TextField className={s.textField} label={'Label'} />
          <Button fullWidth onClick={uploadImage} variant={'secondary'}>
            <ImageOutline />
            Upload image
          </Button>
          <Checkbox label={'Private pack'} onClick={changeCheckbox} />
        </div>

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
