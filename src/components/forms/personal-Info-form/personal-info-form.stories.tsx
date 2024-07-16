import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import avatarDefault from '@/assets/webp/avatar-default.webp'
import { PersonalInfoForm as PersonalInfoFormComponent } from '@/components/forms'
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
    onSubmit: action('onSubmit action invoked!'),
    src: avatarDefault,
  },
  render: args => {
    return (
      <MemoryRouter>
        <PersonalInfoFormComponent {...args} />
      </MemoryRouter>
    )
  },
}
