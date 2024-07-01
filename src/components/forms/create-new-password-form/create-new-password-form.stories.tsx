import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from '@/components/forms'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: CreateNewPasswordForm,
  title: 'Forms/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const CreateNewPasswordFormBase: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
}
