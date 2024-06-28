import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import myImage from '@/assets/webp/react-logo.webp'
import { DeckTitle } from '@/components/ui/deck-title/deck-title'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: DeckTitle,
  title: 'Components/DeckTitle',
} satisfies Meta<typeof DeckTitle>

type Story = StoryObj<typeof meta>
export default meta

const defaultArgs = {
  image: myImage,
  imgDescription: 'some image description',
  isDeleteOpen: false,
  isEditOpen: false,
  onOpenChangeDelete: action('onOpenChangeDelete action invoked!'),
  onOpenChangeEdit: action('onOpenChangeEdit action invoked!'),
  title: "Fried's Deck",
}

export const Example: Story = {
  args: defaultArgs,
  render: args => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(args.isDeleteOpen)
    const [isEditOpen, setIsEditOpen] = useState(args.isEditOpen)

    return (
      <DeckTitle
        {...args}
        isDeleteOpen={isDeleteOpen}
        isEditOpen={isEditOpen}
        onOpenChangeDelete={isOpen => {
          setIsDeleteOpen(isOpen)
          action('onOpenChangeDelete action invoked!')(isOpen)
        }}
        onOpenChangeEdit={isOpen => {
          setIsEditOpen(isOpen)
          action('onOpenChangeEdit action invoked!')(isOpen)
        }}
      />
    )
  },
}
