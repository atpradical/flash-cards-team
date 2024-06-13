import type { Meta, StoryObj } from '@storybook/react'

import { ComponentType, useState } from 'react'

import { action } from '@storybook/addon-actions'

import { ModalAddNewCard } from './addNewCard'
import { ModalAddNewDesk } from './addNewDesk'
import { ModalDeleteCard } from './deleteCard'

const meta = {
  argTypes: {},
  component: ModalAddNewDesk,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof ModalAddNewDesk>

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

export const AddNewDesk: Story = createStory(ModalAddNewDesk)
export const AddNewCard: Story = createStory(ModalAddNewCard)
export const DeleteCard: Story = createStory(ModalDeleteCard, {
  cardName: 'Card Name',
  deleteCard: action('delete card button was clicked'),
})
