import { MemoryRouter } from 'react-router-dom'

import { ForgotPasswordForm as ForgotPasswordFormComponent } from '@/components/forms/forgot-password-form'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: ForgotPasswordFormComponent,
  title: 'Forms/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordFormComponent>

export default meta
type Story = StoryObj<typeof meta>

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
