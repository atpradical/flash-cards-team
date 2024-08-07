import type { Meta, StoryObj } from '@storybook/react'

import { toast } from 'react-toastify'

import { Button } from '@/components/ui/primitives/button'

import { Toast } from './toast'

const meta = {
  argTypes: {},
  component: Toast,
  title: 'Components/Toast',
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.success('This is a success message!')}>Show Success</Button>
      <Toast />
    </>
  ),
}

export const Error: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.error('This is an error message!')}>Show Error</Button>
      <Toast />
    </>
  ),
}

export const Warning: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.warn('This is a warning message!')}>Show Warning</Button>
      <Toast />
    </>
  ),
}
