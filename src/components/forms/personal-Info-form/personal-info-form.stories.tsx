import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { PersonalInfoForm as PersonalInfoFormComponent } from '@/components/forms'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: PersonalInfoFormComponent,
  title: 'Forms/Personal Info Form',
} satisfies Meta<typeof PersonalInfoFormComponent>

type Story = StoryObj<typeof meta>
export default meta

export const PersonalInfoForm: Story = {
  args: {
    isLoading: false,
    onCancel: action('onCancel action invoked!'),
    onSubmit: action('onSubmit action invoked!'),
    userData: mockUser,
  },
  render: args => {
    return (
      <MemoryRouter>
        <PersonalInfoFormComponent {...args} />
      </MemoryRouter>
    )
  },
}
