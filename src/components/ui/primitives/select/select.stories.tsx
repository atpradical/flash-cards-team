import type { Meta, StoryObj } from '@storybook/react'

import {
  mockOptions1,
  mockOptions2,
  mockOptions3,
} from '@/components/ui/primitives/select/select.mock'
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

export const SelectBaseExample: Story = {
  args: {
    label: 'Select Box',
    onValueChange: action('Mock action invoked'),
    options: mockOptions1,
    placeholder: 'just select some option',
    value: '',
  },
}

export const SelectWithDefaultValue: Story = {
  args: {
    defaultValue: mockOptions1[1].value,
    onValueChange: action('Mock action invoked'),
    options: mockOptions1,
    value: mockOptions1[1].value,
  },
}

export const SelectWithDisabledOptions: Story = {
  args: {
    onValueChange: action('Mock action invoked'),
    options: mockOptions2,
    value: mockOptions2[1].value,
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    onValueChange: action('Mock action invoked'),
    options: mockOptions3,
    value: '',
  },
}
