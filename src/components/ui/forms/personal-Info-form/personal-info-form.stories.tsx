import type { Meta, StoryObj } from '@storybook/react'

import avatarDefault from '@/assets/webp/avatar-default.webp'
import { action } from '@storybook/addon-actions'

import { PersonalInfoForm } from './personal-info-form'

const meta = {
  argTypes: {},
  component: PersonalInfoForm,
  tags: ['autodocs'],
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
