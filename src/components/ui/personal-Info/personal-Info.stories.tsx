import { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from './personal-Info'

const meta: Meta<typeof PersonalInfo> = {
  argTypes: {},
  component: PersonalInfo,
  tags: ['autodocs'],
  title: 'PersonalInfo',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfoBase: Story = {
  args: {
    name: 'Ivan',
    photoDesc: 'name',
    src: './src/assets/webp/avatar-default.webp',
  },
}
