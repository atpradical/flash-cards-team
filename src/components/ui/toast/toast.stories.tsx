import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { action } from '@storybook/addon-actions'

import { Toaster } from './toast'

const meta = {
  argTypes: {
    onOpenChange: {
      action: action('onOpenChange button was clicked'),
    },
    open: {
      control: 'boolean',
    },
  },
  component: Toaster,
  tags: ['autodocs'],
  title: 'Components/Toaster',
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onOpenChange: () => {},
    open: false,
  },
  render: ({ onOpenChange, open }) => {
    const [isOpen, setIsOpen] = useState(open)

    const handleOpenChange = (open: boolean) => {
      setIsOpen(open)
      onOpenChange(open)
    }

    return (
      <>
        <Button onClick={() => setIsOpen(!isOpen)}>Show Toast</Button>
        <Toaster onOpenChange={handleOpenChange} open={isOpen} />
      </>
    )
  },
}
