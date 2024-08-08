import { MemoryRouter } from 'react-router-dom'

import { ForgotPasswordForm as ForgotPasswordFormComponent } from '@/components/forms/forgot-password-form'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: ForgotPasswordFormComponent,
  title: 'Forms/Forgot Password Form',
} satisfies Meta<typeof ForgotPasswordFormComponent>

type Story = StoryObj<typeof meta>
export default meta

export const ForgotPasswordForm: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
  render: args => (
    <MemoryRouter>
      <ForgotPasswordFormComponent {...args} />
    </MemoryRouter>
  ),
}
