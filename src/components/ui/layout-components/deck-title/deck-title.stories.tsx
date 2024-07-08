import type { Meta, StoryObj } from '@storybook/react'

import myImage from '@/assets/webp/dummy-cover.webp'
import { DeckTitle } from '@/components/ui/layout-components'
import { action } from '@storybook/addon-actions'

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
    onDelete: action('onDelete was action invoked'),
    onEdit: action('onEdit was action invoked'),
    title: "Fried's Deck",
  },
}
