import { ForgotPasswordForm } from '@/components/forms/forgot-password-form/forgotPasswordForm'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Forms/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordBase: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
}
