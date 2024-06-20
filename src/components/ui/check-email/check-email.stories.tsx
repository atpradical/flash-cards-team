import { CheckEmail } from '@/components/ui/check-email/check-email'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Components/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailExample: Story = {
  args: {
    email: 'test@email.com',
  },
}
