import { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './signInForm'

const meta = {
  argTypes: {},
  component: SignInForm,
  title: 'Components/Forms/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSignInForm: Story = {
  args: {
    errors: false,
  },
  render: args => <SignInForm {...args} />,
}

export const WithErrorsSignInForm: Story = {
  args: {
    errors: true,
  },
  render: args => <SignInForm {...args} />,
}
