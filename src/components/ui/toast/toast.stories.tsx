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

const storyCreator = (
  title: string,
  description: string,
  variant: 'error' | 'success' | 'warning'
): Story => ({
  args: {
    description,
    onOpenChange: () => {},
    open: false,
    title,
    variant,
  },
  render: ({ description, onOpenChange, open, title, variant }) => {
    const [isOpen, setIsOpen] = useState(open)

    const handleOpenChange = (newOpen: boolean) => {
      setIsOpen(newOpen)
      onOpenChange(newOpen)
    }

    return (
      <>
        <Button onClick={() => setIsOpen(!isOpen)}>Show Toast</Button>
        <Toaster
          description={description}
          onOpenChange={handleOpenChange}
          open={isOpen}
          title={title}
          variant={variant}
        />
      </>
    )
  },
})

export const ToastError = storyCreator('Error', 'An error occurred', 'error')
export const ToastWarning = storyCreator('Warning', 'A warning occurred', 'warning')
export const ToastSuccess = storyCreator('Success', 'An action was successful', 'success')
