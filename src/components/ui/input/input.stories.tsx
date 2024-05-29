import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  argTypes: {
    variant: {},
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const Active: Story = {
  args: {},
}

export const Error: Story = {
  args: {
    helperText: 'Error',
    label: 'Label',
    placeholder: 'Error',
  },
}

export const Hover: Story = {
  args: {},
}

export const Focus: Story = {
  args: {},
}
