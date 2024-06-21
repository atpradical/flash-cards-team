import { Actions } from '@/components/ui/actions/actions'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    showAll: { control: 'boolean' },
  },
  component: Actions,
  tags: ['autodocs'],
  title: 'Components/Actions',
} satisfies Meta<typeof Actions>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailExample: Story = {
  args: {
    onDelete: action('delete invoked!'),
    onEdit: action('edit invoked!'),
    onPlay: action('play invoked!'),
    style: { maxWidth: '100%' },
  },
}
