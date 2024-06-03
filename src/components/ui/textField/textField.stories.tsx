import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textField'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    variant: {
      control: {
        options: ['text', 'password', 'search'],
        type: 'radio',
      },
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    variant: 'text',
  },
}

export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter password...',
    variant: 'password',
  },
}

export const Search: Story = {
  args: {
    placeholder: 'Search',
    variant: 'search',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'text',
    disabled: true,
    placeholder: 'Disabled',
  },
}

export const Error: Story = {
  args: {
    error: true,
    helperText: 'Error',
    placeholder: 'Enter text...',
  },
}
