import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { CardDialogForm as CardDialogFormComponent } from '@/components/forms/'
import { store } from '@/services/store'
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
    onOpenChange: action('onOpenChange action invoked!'),
    open: true,
  },
  render: () => (
    <Provider store={store}>
      <CardDialogFormComponent {...CardDialogForm.args} />
    </Provider>
  ),
}
