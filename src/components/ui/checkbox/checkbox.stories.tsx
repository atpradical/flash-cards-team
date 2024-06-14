import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    checked: { type: 'boolean' },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Checkbox',
    onClick: action('action on checkbox click invoked'),
  },
}

export const CheckboxWithoutLabel: Story = {
  args: {
    onClick: action('action on button click invoked'),
  },
}
export const CheckboxChecked: Story = {
  args: {
    defaultChecked: true,
    label: 'Checked checkbox',
  },
}
export const CheckboxUnchecked: Story = {
  args: {
    label: 'Unchecked checkbox',
  },
}
export const CheckboxDisabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled checkbox',
  },
}
export const CheckboxDisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    label: 'Disabled checkbox',
  },
}
