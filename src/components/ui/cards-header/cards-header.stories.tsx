import type { Meta, StoryObj } from '@storybook/react'

import { CardsHeader } from './cards-header'

const meta = {
  argTypes: {},
  component: CardsHeader,
  tags: ['autodocs'],
  title: 'Cards/Header',
} satisfies Meta<typeof CardsHeader>

export default meta
type Story = StoryObj<typeof meta>

export const CardsHeaderisAuthorizedTrue: Story = {
  args: {
    isAuthorized: true,
  },
  render: () => <CardsHeader isAuthorized />,
}

export const CardsHeaderisAuthorizedFalse: Story = {
  args: {
    isAuthorized: false,
  },
  render: () => <CardsHeader isAuthorized={false} />,
}
