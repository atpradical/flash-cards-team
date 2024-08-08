import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { CreateNewPasswordForm as CreateNewPasswordFormComponent } from '@/components/forms'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: CreateNewPasswordFormComponent,
  title: 'Forms/Create New Password Form',
} satisfies Meta<typeof CreateNewPasswordFormComponent>

type Story = StoryObj<typeof meta>
export default meta

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
