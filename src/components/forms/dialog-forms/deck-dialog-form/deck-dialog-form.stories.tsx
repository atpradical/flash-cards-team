import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { DeckDialogForm as DeckDialogFormComponent } from '@/components/forms'
import { store } from '@/services'
import { DIALOG_ACTION } from '@/shared/enums'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    action: {
      control: {
        options: [DIALOG_ACTION.CREATE, DIALOG_ACTION.UPDATE],
        type: 'select',
      },
    },
    open: { control: 'boolean' },
  },
  component: DeckDialogFormComponent,
  title: 'Forms/Deck Dialog Form',
} satisfies Meta<typeof DeckDialogFormComponent>

export default meta
type Story = StoryObj<typeof meta>

export const DeckDialogForm: Story = {
  args: {
    action: DIALOG_ACTION.UPDATE,
    onOpenChange: action('onOpenChange action invoked!'),
    open: true,
  },
  render: args => (
    <MemoryRouter>
      <Provider store={store}>
        <DeckDialogFormComponent {...args} />
      </Provider>
    </MemoryRouter>
  ),
}
