import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { CreateNewPasswordForm as CreateNewPasswordFormComponent } from '@/components/forms'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: CreateNewPasswordFormComponent,
  title: 'Forms/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordFormComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CreateNewPasswordForm: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
  },
  render: args => (
    <MemoryRouter>
      <CreateNewPasswordFormComponent {...args} />
    </MemoryRouter>
  ),
}
