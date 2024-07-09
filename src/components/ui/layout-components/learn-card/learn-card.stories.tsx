import { LearnCard } from '@/components/ui/layout-components'
import { learnCardData } from '@/components/ui/layout-components/learn-card/learn-card.mock'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: LearnCard,
  title: 'Components/LearnCard',
} satisfies Meta<typeof LearnCard>

export default meta
type Story = StoryObj<typeof meta>

export const LearnCardBase: Story = {
  args: {
    card: learnCardData,
    deckName: 'Deck Name',
  },
}
