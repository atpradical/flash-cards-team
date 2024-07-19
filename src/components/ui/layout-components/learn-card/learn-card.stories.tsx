import { LearnCard as LearnCardComponent } from '@/components/ui/layout-components'
import { learnCardData } from '@/components/ui/layout-components/learn-card/learn-card.mock'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: LearnCardComponent,
  title: 'Components/LearnCard',
} satisfies Meta<typeof LearnCardComponent>

export default meta
type Story = StoryObj<typeof meta>

export const LearnCard: Story = {
  args: {
    card: learnCardData,
    deckName: 'Deck Name',
    onNextQuestion: action('onNextQuestion action invoked!'),
    onShowAnswer: action('onShowAnswer action invoked!'),
    showAnswer: true,
  },
}
