import type { Meta, StoryObj } from '@storybook/react'

import { Item, Radio } from '@/components/ui/radio'

const mockRadio: Item[] = [
  { id: '1', label: 'Default', value: '1' },
  { id: '2', label: 'Comfortable', value: '2' },
  { id: '3', label: 'Luxury', value: '3' },
  { id: '4', label: 'Ultra wealth', value: '4' },
]
const mockRadio2: Item[] = [
  { disabled: true, id: '1', label: 'Default', value: '1' },
  { defaultValue: true, id: '2', label: 'Comfortable', value: '2' },
  { disabled: true, id: '3', label: 'Luxury', value: '3' },
  { id: '4', label: 'Ultra wealth', value: '4' },
]
const mockRadio3: Item[] = [
  { id: '1', label: 'Default', value: '1' },
  { id: '2', label: 'Comfortable', value: '2' },
  { defaultValue: true, id: '3', label: 'Luxury', value: '3' },
  { id: '4', label: 'Ultra wealth', value: '4' },
]

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
  },
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/Radio',
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: mockRadio,
  },
}
export const RadioWithDisabledOptions: Story = {
  args: {
    items: mockRadio2,
  },
}
export const RadioWithNotFirstCheckedOption: Story = {
  args: {
    items: mockRadio3,
  },
}
