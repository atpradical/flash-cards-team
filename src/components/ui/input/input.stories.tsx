import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

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
  args: {},
}

export const Active: Story = {
  args: {},
}

export const Error: Story = {
  args: {},
}

export const Hover: Story = {
  args: {},
}

export const Focus: Story = {
  args: {},
}
