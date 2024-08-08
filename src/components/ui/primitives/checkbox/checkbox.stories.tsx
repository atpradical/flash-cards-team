import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/primitives'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    checked: { type: 'boolean' },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Primitives/Checkbox',
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
  args: {
    label: 'Checkbox',
    onClick: action('Button click invoked'),
  },
}

export const CheckboxWithoutLabel: Story = {
  args: {
    onClick: action('Button click invoked'),
  },
}
export const CheckboxChecked: Story = {
  args: {
    defaultChecked: true,
    label: 'Checked',
  },
}
export const CheckboxUnchecked: Story = {
  args: {
    label: 'Unchecked',
  },
}
export const CheckboxDisabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
}
export const CheckboxDisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    label: 'Disabled',
  },
}
