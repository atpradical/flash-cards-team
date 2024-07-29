import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { Select } from './select'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
    onValueChange: action('Mock action invoked'),
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Primitives/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectBaseExample: Story = {
  args: {
    label: 'Select Box',
    onValueChange: action('Mock action invoked'),
    placeholder: 'just select some option',
    value: '',
  },
}

export const SelectWithDefaultValue: Story = {
  args: {
    defaultValue: '10',
    onValueChange: action('Mock action invoked'),
    value: '10',
  },
}

export const SelectWithDisabled: Story = {
  args: {
    disabled: true,
    onValueChange: action('Mock action invoked'),
    value: '20',
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    onValueChange: action('Mock action invoked'),
    value: '',
  },
}
