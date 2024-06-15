import { ComponentType, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { AddNewCardDialog } from '@/components/decs/deck-dialogs/add-new-card-dialog'
import { AddNewDeckDialog } from '@/components/decs/deck-dialogs/add-new-deck-dialog'
import { DeleteCardDialog } from '@/components/decs/deck-dialogs/delete-card-dialog'

const meta = {
  argTypes: {},
  component: AddNewDeckDialog,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof AddNewDeckDialog>

export default meta
type Story = StoryObj<typeof meta>

const createStory = (Component: ComponentType<any>, extraArgs: Partial<any> = {}): Story => ({
  args: {
    addNewPack: action('add new pack button was clicked'),
    cancel: action('cancel button was clicked'),
    changeCheckbox: action('checkbox was toggled'),
    close: action('close modal was invoked'),
    open: action('open modal was invoked'),
    uploadImage: action('upload image button was clicked'),
    ...extraArgs,
  },
  render: args => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChangeCheckbox = () => {
      setIsChecked(!isChecked)
      args.changeCheckbox()
    }

    return <Component {...args} changeCheckbox={handleChangeCheckbox} />
  },
})

export const AddNewDesk: Story = createStory(AddNewDeckDialog)
export const AddNewCard: Story = createStory(AddNewCardDialog)
export const DeleteCard: Story = createStory(DeleteCardDialog, {
  cardName: 'Card Name',
  deleteCard: action('delete card button was clicked'),
})
