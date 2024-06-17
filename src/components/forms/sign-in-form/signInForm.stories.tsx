import { Meta, StoryObj } from '@storybook/react'
import { FormValues, SignInForm } from './signInForm'

const meta: Meta<typeof SignInForm> = {
  title: 'Components/Forms/SignInForm',
  component: SignInForm,
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: (data: FormValues) => {
      console.log('Form submitted', data)
    },
  },
  render: args => <SignInForm {...args} />,
}

export const WithErrors: Story = {
  args: {
    onSubmit: (data: FormValues) => {
      console.log('Form submitted', data)
    },
    defaultValues: {
      email: 'invalid-email',
      password: '123',
      rememberMe: true,
    },
  },
  render: args => <SignInForm {...args} />,
}
