import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { ConfirmEmail as ConfirmEmailComponent } from '@/components/ui/layout-components/confirm-email'
import { store } from '@/services'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: ConfirmEmailComponent,
  title: 'Layout Components',
} satisfies Meta<typeof ConfirmEmailComponent>

type Story = StoryObj<typeof meta>
export default meta

export const ConfirmEmail: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <Provider store={store}>
          <ConfirmEmailComponent />
        </Provider>
      </MemoryRouter>
    )
  },
}
