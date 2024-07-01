import type { Meta, StoryObj } from '@storybook/react'

import avatarDefault from '@/assets/webp/avatar-default.webp'
import { PersonalInfoForm } from '@/components/forms'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: PersonalInfoForm,
  title: 'Forms/PersonalInfoForm',
} satisfies Meta<typeof PersonalInfoForm>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfoFormExample: Story = {
  args: {
    onSubmit: action('onSubmit action invoked!'),
    src: avatarDefault,
  },
}
