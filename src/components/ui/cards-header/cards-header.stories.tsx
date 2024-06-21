import type { Meta, StoryObj } from '@storybook/react'

import { CardsHeader } from './cards-header'

const meta = {
  argTypes: {
    isAuthorized: {
      control: { type: 'boolean' },
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
    isAuthorized: true,
  },
}
