import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from '@/components/ui/forms/sign-up-form'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Forms/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpFormBase: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
}
