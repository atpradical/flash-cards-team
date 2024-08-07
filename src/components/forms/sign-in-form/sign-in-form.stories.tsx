import { MemoryRouter } from 'react-router-dom'

import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { SignInForm as SignInFormComponent } from './sign-in-form'

const meta = {
  argTypes: {},
  component: SignInFormComponent,
  title: 'Forms/SignInForm',
} satisfies Meta<typeof SignInFormComponent>

export default meta
type Story = StoryObj<typeof meta>

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
