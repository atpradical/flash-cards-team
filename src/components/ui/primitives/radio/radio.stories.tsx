import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from '@/components/ui/primitives'
import { mockRadio, mockRadio2, mockRadio3 } from '@/components/ui/primitives/radio/radio.mock'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
  },
  component: Radio,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof Radio>

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
