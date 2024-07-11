import type { Meta, StoryObj } from '@storybook/react'

import { DeleteDialogForm as DeleteDialogFormComponent } from '@/components/forms'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    entity: { control: 'inline-radio' },
    open: { control: 'boolean' },
  },
  component: DeleteDialogFormComponent,
  title: 'Forms/DeleteDialogForm',
} satisfies Meta<typeof DeleteDialogFormComponent>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteDialogForm: Story = {
  args: {
    id: '12345',
    name: 'Some Name',
    onOpenChange: action('onOpenChange action invoked!'),
    onSubmit: action('onSubmit action invoked!'),
    open: true,
  },
}
