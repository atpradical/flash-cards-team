import type { Meta, StoryObj } from '@storybook/react'

import { AddNewCardDialogForm } from '@/components/forms'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    open: { control: 'boolean' },
  },
  component: AddNewCardDialogForm,
  title: 'Forms/AddNewCardDialogForm',
} satisfies Meta<typeof AddNewCardDialogForm>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewCardFormExample: Story = {
  args: {
    onOpenChange: action('onOpenChange action invoked!'),
    onSubmit: action('onSubmit action invoked!'),
    open: true,
  },
}
