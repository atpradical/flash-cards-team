import { Actions } from '@/components/ui/layout-components/actions/actions'
import { VARIANT } from '@/shared/enums/enums'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Actions,
  title: 'Components/Actions',
} satisfies Meta<typeof Actions>

export default meta
type Story = StoryObj<typeof meta>

export const ActionsAll: Story = {
  args: {
    onDelete: action('delete invoked!'),
    onEdit: action('edit invoked!'),
    onLearn: action('play invoked!'),
    style: { maxWidth: '100%' },
    variant: VARIANT.ALL,
  },
}

export const ActionsLearn: Story = {
  args: {
    onDelete: action('delete invoked!'),
    onEdit: action('edit invoked!'),
    onLearn: action('play invoked!'),
    style: { maxWidth: '100%' },
    variant: VARIANT.ONLY_LEARN,
  },
}

export const ActionsEdit: Story = {
  args: {
    onDelete: action('delete invoked!'),
    onEdit: action('edit invoked!'),
    onLearn: action('play invoked!'),
    style: { maxWidth: '100%' },
    variant: VARIANT.ONLY_EDITS,
  },
}
