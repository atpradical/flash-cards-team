import { MemoryRouter } from 'react-router-dom'

import { SignInForm as SignInFormComponent } from '@/components/forms/sign-in-form'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: SignInFormComponent,
  title: 'Forms/Sign In Form',
} satisfies Meta<typeof SignInFormComponent>

type Story = StoryObj<typeof meta>
export default meta

export const SignInForm: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
  render: args => (
    <MemoryRouter>
      <SignInFormComponent {...args} />
    </MemoryRouter>
  ),
}
