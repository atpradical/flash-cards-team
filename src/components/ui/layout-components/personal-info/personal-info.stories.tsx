import { PersonalInfo as PersonalInfoComponent } from '@/components/ui/layout-components'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: PersonalInfoComponent,
  title: 'Layout Components/Personal Info',
} satisfies Meta<typeof PersonalInfoComponent>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfo: Story = {
  args: {
    avatar: mockUser.avatar ?? '',
    delAccount: action('delAccount action invoked!'),
    email: mockUser.email,
    isEmailVerified: false,
    isResendSuccess: false,
    name: mockUser.name,
    onDelete: action('onDelete action invoked!'),
    onEdit: action('onEdit action invoked!'),
    onEmailVerify: action('onEmailVerify action invoked!'),
    onLogout: action('onLogout action invoked!'),
    onUpdate: action('onUpdate action invoked!'),
    userId: 'someId',
  },
}
