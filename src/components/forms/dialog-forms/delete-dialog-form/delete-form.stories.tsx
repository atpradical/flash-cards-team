import type { Meta, StoryObj } from '@storybook/react'

import { DeleteDialogForm } from '@/components/forms'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    entity: { control: 'inline-radio' },
    open: { control: 'boolean' },
  },
  component: DeleteDialogForm,
  title: 'Forms/DeleteForm',
} satisfies Meta<typeof DeleteDialogForm>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteFormExample: Story = {
  args: {
    entity: 'Deck',
    id: '12345',
    name: 'Some Name',
    onOpenChange: action('onOpenChange action invoked!'),
    onSubmit: action('onSubmit action invoked!'),
    open: true,
  },
}
