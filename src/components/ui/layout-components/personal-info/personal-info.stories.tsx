import { PersonalInfo as PersonalInfoComponent } from '@/components/ui/layout-components'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: PersonalInfoComponent,
  title: 'Layout Components/PersonalInfo',
} satisfies Meta<typeof PersonalInfoComponent>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfo: Story = {
  args: {
    userData: mockUser,
  },
}
