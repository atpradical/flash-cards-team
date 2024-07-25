import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { mockUser } from '../../primitives/dropdown/dropdown.mock'
import { CardsHeader } from './cards-header'

const meta = {
  argTypes: {
    isAuth: {
      control: { type: 'boolean' },
    },
    isFetching: {
      control: { type: 'boolean' },
    },
    userData: {
      control: { type: 'object' },
    },
  },
  component: CardsHeader,
  tags: ['autodocs'],
  title: 'Cards/Header',
} satisfies Meta<typeof CardsHeader>

export default meta
type Story = StoryObj<typeof meta>

export const CardsHeaderisAuthorizedTrue: Story = {
  args: {
    isAuth: true,
    isFetching: false,
    userData: mockUser,
  },
  render: args => {
    return (
      <MemoryRouter>
        <CardsHeader {...args} />
      </MemoryRouter>
    )
  },
}
