import { PersonalInfo as PersonalInfoComponent } from '@/components/ui/layout-components'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { action } from '@storybook/addon-actions'
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
    avatar: mockUser.avatar ?? '',
    delAccount: action('updAvatar action invoked!'),
    delAvatar: action('onEdit action invoked!'),
    email: mockUser.email,
    isEmailVerified: false,
    isResendSuccess: false,
    name: mockUser.name,
    onEdit: action('onEdit action invoked!'),
    onEmailVerify: action('onEmailVerify action invoked!'),
    onLogout: action('onLogout action invoked!'),
    updAvatar: action('updAvatar action invoked!'),
    userId: 'someId',
  },
}
