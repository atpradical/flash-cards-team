import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { DeckDialogForm as DeckDialogFormComponent } from '@/components/forms'
import { store } from '@/services/store'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    open: { control: 'boolean' },
  },
  component: DeckDialogFormComponent,
  title: 'Forms/DeckDialogForm',
} satisfies Meta<typeof DeckDialogFormComponent>

export default meta
type Story = StoryObj<typeof meta>

export const DeckDialogForm: Story = {
  args: {
    onOpenChange: action('onOpenChange action invoked!'),
    open: true,
  },
  render: args => (
    <Provider store={store}>
      <DeckDialogFormComponent {...args} />
    </Provider>
  ),
}
