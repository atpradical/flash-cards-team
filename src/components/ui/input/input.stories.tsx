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
    label: 'Label',
    placeholder: 'Error',
    helperText: 'Error',
  },
}

export const Hover: Story = {
  args: {},
}

export const Focus: Story = {
  args: {},
}
