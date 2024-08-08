import { Provider } from 'react-redux'

import { DeleteDialogForm as DeleteDialogFormComponent } from '@/components/forms'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    entity: { control: 'inline-radio' },
    open: { control: 'boolean' },
  },
  component: DeleteDialogFormComponent,
  title: 'Forms/Delete Dialog Form',
} satisfies Meta<typeof DeleteDialogFormComponent>

type Story = StoryObj<typeof meta>
export default meta

export const DeleteDialogForm: Story = {
  args: {
    entityId: '12345',
    name: mockUser.name,
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
