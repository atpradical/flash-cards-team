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
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = ['10', '20', '30', '50', '100']

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
    defaultValue: options[0],
    disabled: true,
    onValueChange: action('Mock action invoked'),
    value: options[0],
  },
}

export const SelectWithDisabledOptions: Story = {
  args: {
    disabled: true,
    onValueChange: action('Mock action invoked'),
    value: options[1],
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    onValueChange: action('Mock action invoked'),
    value: '',
  },
}
