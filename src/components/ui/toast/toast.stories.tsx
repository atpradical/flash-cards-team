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
    variant: {
      control: 'select',
      options: ['error', 'warning', 'success'],
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid',
    onOpenChange: () => {},
    open: false,
    title: 'Title',
  },
  render: ({ description, onOpenChange, open, title }) => {
    const [isOpen, setIsOpen] = useState(open)

    const handleOpenChange = (open: boolean) => {
      setIsOpen(open)
      onOpenChange(open)
    }

    return (
      <>
        <Button onClick={() => setIsOpen(!isOpen)}>Show Toast</Button>
        <Toaster
          description={description}
          onOpenChange={handleOpenChange}
          open={isOpen}
          title={title}
          variant={'error'}
        />
      </>
    )
  },
}
