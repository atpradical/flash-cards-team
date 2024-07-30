import type { Meta, StoryObj } from '@storybook/react'

import { toast } from 'react-toastify'

import { FlexContainer } from '@/shared/ui/flex-container'

import 'react-toastify/dist/ReactToastify.css'

import { Button } from '../button'
import { Toast as ToastComponent } from './toast'

const meta = {
  argTypes: {
    stacked: { control: 'boolean' },
  },
  component: ToastComponent,
  tags: ['autodocs'],
  title: 'Primitives/Toast',
} satisfies Meta<typeof ToastComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Toast: Story = {
  render: args => {
    const notifyInfoHandler = () => toast.info('Informational toast')
    const notifySuccessHandler = () => toast.success('Success toast')
    const notifyWarningHandler = () => toast.warning('Warning toast')
    const notifyErrorHandler = () => toast.error('Error toast')

    return (
      <FlexContainer fw={'wrap'} gap={'10px'}>
        <Button onClick={notifyInfoHandler}>Info</Button>
        <Button onClick={notifySuccessHandler}>Success</Button>
        <Button onClick={notifyWarningHandler}>Warning</Button>
        <Button onClick={notifyErrorHandler}>Error</Button>
        <ToastComponent {...args} />
      </FlexContainer>
    )
  },
}
