import { MemoryRouter } from 'react-router-dom'

import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { SignInForm as SignInFormComponent } from './sign-in-form'

const meta: Meta<typeof SignInFormComponent> = {
  argTypes: {},
  component: SignInFormComponent,
  title: 'Forms/Sign In Form',
} satisfies Meta<typeof SignInFormComponent>

export default meta
type Story = StoryObj<typeof meta>

export const SignInForm: Story = {
  args: {
    onSubmit: action('onSubmit form invoked'),
  },
  render: args => (
    <MemoryRouter>
      <SignInFormComponent {...args} />
    </MemoryRouter>
  ),
}
