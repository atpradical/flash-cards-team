import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './modal'
import { TextField } from '../textField'
import { Button } from '../button'
import { Checkbox } from '../checkbox'
import s from './modal.module.scss'
import { CloseOutline, ImageOutline } from '@/assets/components/svgIcons'

const meta = {
  argTypes: {},
  component: Modal.Root,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal.Root>

export default meta
type Story = StoryObj<typeof meta>

export const ModalAddNewDesk: Story = {
  args: {},
  render: () => {
    return (
      <Modal.Root>
        <Modal.Trigger asChild>
          <Button>Open</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title as={'h3'} variant={'h3'}>
              Add new Desk
            </Modal.Title>
            <Modal.Close asChild>
              <Button variant="icon">
                <CloseOutline />
              </Button>
            </Modal.Close>
          </Modal.Header>

          <Modal.Description>
            <TextField fullWidth={true} label={'Label'} className={s.textField}></TextField>
            <Button fullWidth={true} variant="secondary">
              <ImageOutline />
              Upload image
            </Button>
            <Checkbox label={'Private pack'}></Checkbox>
          </Modal.Description>

          <Modal.Footer>
            <Modal.Close asChild>
              <Button variant="secondary">Cancel</Button>
            </Modal.Close>
            <Button>Add New Pack</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    )
  },
}
