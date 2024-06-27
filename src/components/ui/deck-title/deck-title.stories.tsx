import type { Meta, StoryObj } from '@storybook/react'

import myImage from '@/assets/webp/react-logo.webp'
import { DeckTitle } from '@/components/ui/deck-title/deck-title'

const meta = {
  argTypes: {},
  component: DeckTitle,
  title: 'Components/DeckTitle',
} satisfies Meta<typeof DeckTitle>

type Story = StoryObj<typeof meta>
export default meta

export const Example: Story = {
  args: {
    image: myImage,
    imgDescription: 'some image description',
    title: "Fried's Deck",
  },
}
