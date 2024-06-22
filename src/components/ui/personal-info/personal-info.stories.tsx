import avatarDefault from '@/assets/webp/avatar-default.webp'
import { PersonalInfo } from '@/components/ui/personal-info/personal-info'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: PersonalInfo,
  tags: ['autodocs'],
  title: 'Components/PersonalInfo',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfoBase: Story = {
  args: {
    name: 'Ivan',
    photoDesc: 'name',
    src: avatarDefault,
  },
}
