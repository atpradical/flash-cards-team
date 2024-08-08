import type { Meta, StoryObj } from '@storybook/react'

import { Select as SelectComponent } from '@/components/ui/primitives/select'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: SelectComponent,
  tags: ['autodocs'],
  title: 'Primitives/Select',
} satisfies Meta<typeof SelectComponent>

type Story = StoryObj<typeof meta>
export default meta

export const Select: Story = {
  args: {
    label: 'Select',
    onValueChange: action('Action invoked'),
    placeholder: 'select some option',
    value: '',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: '10',
    onValueChange: action('Action invoked'),
    value: '10',
  },
}
