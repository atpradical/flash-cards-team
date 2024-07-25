import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { CardsHeader as CardsHeaderComponent } from './cards-header'

const meta = {
  argTypes: {},
  component: CardsHeaderComponent,
  title: 'Layout Components',
} satisfies Meta<typeof CardsHeaderComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CardsHeader: Story = {
  args: {
    isAuth: true,
  },
  render: args => {
    return (
      <MemoryRouter>
        <CardsHeaderComponent {...args} />
      </MemoryRouter>
    )
  },
}
