import { Meta, StoryObj } from '@storybook/react'
import { FormValues, SignInForm } from './signInForm'

const meta: Meta<typeof SignInForm> = {
  argTypes: {},
  title: 'Components/Forms/SignInForm',
  component: SignInForm,
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

// export const Primary: Story = {}

export const DefaultSignInForm: Story = {
  args: {
    onSubmit: (data: FormValues) => {
      console.log('Form submitted', data)
    },
    errors: {
      email: 'Invalid email address',
      password: 'Min 3 characters',
      rememberMe: 'Check',
    },
  },
  render: args => <SignInForm {...args} />,
}
