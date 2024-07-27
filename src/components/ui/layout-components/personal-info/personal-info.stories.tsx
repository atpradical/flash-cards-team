import { PersonalInfo } from '@/components/ui/layout-components'
import { Meta, StoryObj } from '@storybook/react'

import { mockUser } from '../../primitives/dropdown/dropdown.mock'

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
    user: mockUser,
  },
}
