import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { DeleteDialogForm as DeleteDialogFormComponent } from '@/components/forms'
import { store } from '@/services/store'
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
    entityId: '12345',
    name: 'Some Name',
    onOpenChange: action('onOpenChange action invoked!'),
    open: true,
  },
  render: args => {
    return (
      <Provider store={store}>
        <DeleteDialogFormComponent {...args} />
      </Provider>
    )
  },
}
