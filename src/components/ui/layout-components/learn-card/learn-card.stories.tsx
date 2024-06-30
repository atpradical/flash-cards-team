import { LearnCard } from '@/components/ui/layout-components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    answer: { control: 'text' },
    question: { control: 'text' },
  },
  component: LearnCard,
  tags: ['autodocs'],
  title: 'Components/LearnCard',
} satisfies Meta<typeof LearnCard>

export default meta
type Story = StoryObj<typeof meta>

export const LearnCardBase: Story = {
  args: {
    answer: 'This is how "This" works in JavaScript',
    deckName: 'Deck Name',
    question: 'How "This" works in JavaScript?',
  },
}
