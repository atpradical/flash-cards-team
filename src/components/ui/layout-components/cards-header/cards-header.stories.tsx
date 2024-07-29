import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { store } from '@/services'

import { CardsHeader as CardsHeaderComponent } from './cards-header'

const meta = {
  argTypes: { isAuth: { control: 'boolean' } },
  component: CardsHeaderComponent,
  title: 'Layout Components',
} satisfies Meta<typeof CardsHeaderComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CardsHeader: Story = {
  args: {
    isAuth: true,
    userData: mockUser,
  },
  render: args => {
    return (
      <MemoryRouter>
        <Provider store={store}>
          <CardsHeaderComponent {...args} />
        </Provider>
      </MemoryRouter>
    )
  },
}
