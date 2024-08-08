import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { SignUpForm as SignUpFormComponent } from '@/components/forms/sign-up-form'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: SignUpFormComponent,
  title: 'Forms/Sign Up Form',
} satisfies Meta<typeof SignUpFormComponent>

type Story = StoryObj<typeof meta>
export default meta

export const SignUpForm: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
  render: args => (
    <MemoryRouter>
      <SignUpFormComponent {...args} />
    </MemoryRouter>
  ),
}
