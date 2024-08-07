import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { DeleteDialogForm as DeleteDialogFormComponent } from '@/components/forms'
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
      <MemoryRouter>
        <Provider store={store}>
          <DeleteDialogFormComponent {...args} />
        </Provider>
      </MemoryRouter>
    )
  },
}
