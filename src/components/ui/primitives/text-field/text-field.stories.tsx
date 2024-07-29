import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { TextField } from './text-field'

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
  title: 'Primitives/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    variant: 'text',
  },
  render: args => {
    return (
      <MemoryRouter>
        <TextField {...args} />
      </MemoryRouter>
    )
  },
}

export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter password...',
    variant: 'password',
  },
  render: args => {
    return (
      <MemoryRouter>
        <TextField {...args} />
      </MemoryRouter>
    )
  },
}

export const Search: Story = {
  args: {
    placeholder: 'Search',
    variant: 'search',
  },
  render: args => {
    return (
      <MemoryRouter>
        <TextField {...args} />
      </MemoryRouter>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
  render: args => {
    return (
      <MemoryRouter>
        <TextField {...args} />
      </MemoryRouter>
    )
  },
}

export const Error: Story = {
  args: {
    error: true,
    helperText: 'Error',
    placeholder: 'Enter text...',
  },
  render: args => {
    return (
      <MemoryRouter>
        <TextField {...args} />
      </MemoryRouter>
    )
  },
}
