import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { CardDialogForm as CardDialogFormComponent } from '@/components/forms/'
import { store } from '@/services'
import { DIALOG_ACTION } from '@/shared/enums'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    open: { control: 'boolean' },
  },
  component: CardDialogFormComponent,
  title: 'Forms/CardDialogForm',
} satisfies Meta<typeof CardDialogFormComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CardDialogForm: Story = {
  args: {
    action: DIALOG_ACTION.UPDATE,
    onOpenChange: action('onOpenChange action invoked!'),
    open: true,
  },
  render: args => (
    <MemoryRouter>
      <Provider store={store}>
        <CardDialogFormComponent {...args} />
      </Provider>
    </MemoryRouter>
  ),
}
