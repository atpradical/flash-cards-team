import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { SignUpForm } from '@/components/forms/sign-up-form/sign-up-form'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: SignUpForm,
  title: 'Forms/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpFormBase: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
  render: () => (
    <MemoryRouter>
      <SignUpForm {...SignUpFormBase.args} />
    </MemoryRouter>
  ),
}
