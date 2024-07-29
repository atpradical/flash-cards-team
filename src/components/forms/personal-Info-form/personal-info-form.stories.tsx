import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { PersonalInfoForm as PersonalInfoFormComponent } from '@/components/forms'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: PersonalInfoFormComponent,
  title: 'Forms/PersonalInfoForm',
} satisfies Meta<typeof PersonalInfoFormComponent>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfoForm: Story = {
  args: {
    avatar: mockUser.avatar ?? '',
    name: mockUser.name,
    onCancel: action('onCancel action invoked!'),
    onSubmit: action('onSubmit action invoked!'),
  },
  render: args => {
    return (
      <MemoryRouter>
        <PersonalInfoFormComponent {...args} />
      </MemoryRouter>
    )
  },
}
