import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { AddNewDeckDialogForm } from '@/components/forms'
import { store } from '@/services/store'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    open: { control: 'boolean' },
  },
  component: AddNewDeckDialogForm,
  title: 'Forms/AddNewDeckDialogForm',
} satisfies Meta<typeof AddNewDeckDialogForm>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewDeckFormExample: Story = {
  args: {
    onOpenChange: action('onOpenChange action invoked!'),
    open: true,
  },
  render: () => (
    <Provider store={store}>
      <AddNewDeckDialogForm {...AddNewDeckFormExample.args} />
    </Provider>
  ),
}
