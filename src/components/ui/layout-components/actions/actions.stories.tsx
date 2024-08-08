import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { Actions } from '@/components/ui/layout-components'
import { store } from '@/services'
import { VARIANT } from '@/shared/enums'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Actions,
  title: 'Layout Components/Actions',
} satisfies Meta<typeof Actions>

type Story = StoryObj<typeof meta>
export default meta

const commonArgs = {
  id: '12345',
  isFavorite: true,
  onDelete: action('delete invoked!'),
  onEdit: action('edit invoked!'),
  onLearn: 'clyh5nywc001npb013u2y57ec',
  style: { maxWidth: '100%' },
}

const renderWithProviders = (args: any) => (
  <MemoryRouter>
    <Provider store={store}>
      <Actions {...args} />
    </Provider>
  </MemoryRouter>
)

export const ActionsAll: Story = {
  args: {
    ...commonArgs,
    variant: VARIANT.ALL,
  },
  render: renderWithProviders,
}

export const ActionsLearn: Story = {
  args: {
    ...commonArgs,
    variant: VARIANT.ONLY_LEARN,
  },
  render: renderWithProviders,
}

export const ActionsEdit: Story = {
  args: {
    ...commonArgs,
    variant: VARIANT.ONLY_EDITS,
  },
  render: renderWithProviders,
}
