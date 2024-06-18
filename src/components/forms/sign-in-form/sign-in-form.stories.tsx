import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './sign-in-form'

const meta: Meta<typeof SignInForm> = {
  argTypes: {},
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Forms/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignInFormBase: Story = {
  args: {
    onSubmit: action('onSubmit action invoked'),
  },
}
