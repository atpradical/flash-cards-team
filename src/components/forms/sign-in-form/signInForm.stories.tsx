import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './signInForm'

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  title: 'Components/Forms/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: action('onSubmit action invoked'),
  },
  render: args => <SignInForm {...args} />,
}
