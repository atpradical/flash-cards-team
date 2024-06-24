import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { CreateNewPasswordForm } from './create-new-password-form'

const meta = {
  argTypes: {},
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'Forms/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const CreateNewPasswordFormBase: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
}
