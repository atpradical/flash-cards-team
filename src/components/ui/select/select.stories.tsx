import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { Select, SelectItem } from './select'

const mockOptions1: SelectItem[] = [
  { title: 'some option 1', value: 'option-1' },
  { title: 'some option 2', value: 'option-2' },
  { title: 'some option 3', value: 'option-3' },
  { title: 'some option 4', value: 'option-4' },
  { title: 'some option 5', value: 'option-5' },
]

const mockOptions2: SelectItem[] = [
  { disabled: true, title: 'some option 1', value: 'option-1' },
  { title: 'some option 2', value: 'option-2' },
  { title: 'some option 3', value: 'option-3' },
  { disabled: true, title: 'some option 4', value: 'option-4' },
  { disabled: true, title: 'some option 5', value: 'option-5' },
]
const mockOptions3: SelectItem[] = [
  { disabled: true, title: 'some option 1', value: 'option-1' },
  { disabled: true, title: 'some option 2', value: 'option-2' },
  { disabled: true, title: 'some option 3', value: 'option-3' },
  { disabled: true, title: 'some option 4', value: 'option-4' },
  { disabled: true, title: 'some option 5', value: 'option-5' },
]

const mockNoOptions: SelectItem[] = []

const meta = {
  argTypes: {
    onValueChange: action('Mock action invoked'),
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectWithLabel: Story = {
  args: {
    items: mockOptions1,
    label: 'Select Box',
    placeholder: 'just select some option',
  },
}

export const BaseSelectNoPlaceholder: Story = {
  args: {
    items: mockOptions1,
  },
}

export const SelectWithDefaultValue: Story = {
  args: {
    defaultValue: mockOptions1[1].value,
    items: mockOptions1,
  },
}

export const SelectWithDisabledOptions: Story = {
  args: {
    items: mockOptions2,
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    items: mockOptions3,
  },
}

export const SelectEmpty: Story = {
  args: {
    items: mockNoOptions,
  },
}
