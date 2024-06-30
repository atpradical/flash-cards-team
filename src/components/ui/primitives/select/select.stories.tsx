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
