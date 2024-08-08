import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from '@/components/ui/primitives'
import { mockRadio3 } from '@/components/ui/primitives/radio/radio.mock'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
  },
  component: Radio,
  tags: ['autodocs'],
  title: 'Primitives/RadioGroup',
} satisfies Meta<typeof Radio>

type Story = StoryObj<typeof meta>
export default meta

export const RadioWithNotFirstCheckedOption: Story = {
  args: {
    options: mockRadio3,
  },
}
