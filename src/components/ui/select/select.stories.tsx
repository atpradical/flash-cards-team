import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { Select, SelectOption } from './select'

const mockOptions1: SelectOption[] = [
  { title: 'some option 1', value: 'option-1' },
  { title: 'some option 2', value: 'option-2' },
  { title: 'some option 3', value: 'option-3' },
  { title: 'some option 4', value: 'option-4' },
  { title: 'some option 5', value: 'option-5' },
]

const mockOptions2: SelectOption[] = [
  { disabled: true, title: 'some option 1', value: 'option-1' },
  { title: 'some option 2', value: 'option-2' },
  { title: 'some option 3', value: 'option-3' },
  { disabled: true, title: 'some option 4', value: 'option-4' },
  { disabled: true, title: 'some option 5', value: 'option-5' },
]
const mockOptions3: SelectOption[] = [
  { disabled: true, title: 'some option 1', value: 'option-1' },
  { disabled: true, title: 'some option 2', value: 'option-2' },
  { disabled: true, title: 'some option 3', value: 'option-3' },
  { disabled: true, title: 'some option 4', value: 'option-4' },
  { disabled: true, title: 'some option 5', value: 'option-5' },
]

const mockNoOptions: SelectOption[] = []

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

export const SelectWithLabel: Story = {
  args: {
    label: 'Select Box',
    options: mockOptions1,
    placeholder: 'just select some option',
  },
}

export const BaseSelectNoPlaceholder: Story = {
  args: {
    options: mockOptions1,
  },
}

export const SelectWithDefaultValue: Story = {
  args: {
    defaultValue: mockOptions1[1].value,
    options: mockOptions1,
  },
}

export const SelectWithDisabledOptions: Story = {
  args: {
    options: mockOptions2,
  },
}

export const SelectDisabled: Story = {
  args: {
    disabled: true,
    options: mockOptions3,
  },
}

export const SelectEmpty: Story = {
  args: {
    options: mockNoOptions,
  },
}
