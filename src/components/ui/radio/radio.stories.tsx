import type { Meta, StoryObj } from '@storybook/react'

import { Option, RadioGroup } from '@/components/ui/radio'

const mockRadio: Option[] = [
  { id: '1', label: 'Default', value: '1' },
  { id: '2', label: 'Comfortable', value: '2' },
  { id: '3', label: 'Luxury', value: '3' },
  { id: '4', label: 'Ultra wealth', value: '4' },
]
const mockRadio2: Option[] = [
  { disabled: true, id: '1', label: 'Default', value: '1' },
  { defaultValue: true, id: '2', label: 'Comfortable', value: '2' },
  { disabled: true, id: '3', label: 'Luxury', value: '3' },
  { id: '4', label: 'Ultra wealth', value: '4' },
]
const mockRadio3: Option[] = [
  { id: '1', label: 'Default', value: '1' },
  { id: '2', label: 'Comfortable', value: '2' },
  { defaultValue: true, id: '3', label: 'Luxury', value: '3' },
  { id: '4', label: 'Ultra wealth', value: '4' },
]

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: mockRadio,
  },
}
export const RadioWithDisabledOptions: Story = {
  args: {
    options: mockRadio2,
  },
}
export const RadioWithNotFirstCheckedOption: Story = {
  args: {
    options: mockRadio3,
  },
}
