import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { CardsHeader as CardsHeaderComponent } from '@/components/ui/layout-components/cards-header'

const meta = {
  argTypes: {},
  component: CardsHeaderComponent,
  title: 'Layout Components',
} satisfies Meta<typeof CardsHeaderComponent>

type Story = StoryObj<typeof meta>
export default meta

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
