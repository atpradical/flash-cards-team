import type { Meta, StoryObj } from '@storybook/react'

import { toast } from 'react-toastify'

import { Button } from '@/components/ui/primitives/button'
import { Toast as ToastComponent } from '@/components/ui/primitives/toast'
import { FlexContainer } from '@/shared/ui/flex-container'

const meta = {
  argTypes: {},
  component: ToastComponent,
  tags: ['autodocs'],
  title: 'Primitives/Toast',
} satisfies Meta<typeof ToastComponent>

type Story = StoryObj<typeof meta>
export default meta

export const Toast: Story = {
  render: () => (
    <FlexContainer gap={'15px'}>
      <Button onClick={() => toast.success('This is a success message!')}>Success</Button>
      <Button onClick={() => toast.error('This is an error message!')}>Error</Button>
      <Button onClick={() => toast.warn('This is a warning message!')}>Warning</Button>
      <Button onClick={() => toast.info('This is an info message!')}>Info</Button>
      <ToastComponent />
    </FlexContainer>
  ),
}
