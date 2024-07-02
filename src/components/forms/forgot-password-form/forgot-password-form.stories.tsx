import { MemoryRouter } from 'react-router-dom'

import { ForgotPasswordForm } from '@/components/forms/forgot-password-form/forgot-password-form'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: ForgotPasswordForm,
  title: 'Forms/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordBase: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
  render: () => (
    <MemoryRouter>
      <ForgotPasswordForm {...ForgotPasswordBase.args} />
    </MemoryRouter>
  ),
}
