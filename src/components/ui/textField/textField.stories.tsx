import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import { TextField } from './textField'

const meta = {
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    label: { control: 'text' },
    onSearchIconClick: action('search'),
    placeholder: { control: 'text' },
    type: {
      control: {
        options: ['text', 'password', 'search'],
        type: 'select',
      },
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs = {
  onSearchIconClick: action('search'),
}

export const Text: Story = {
  args: {
    ...defaultArgs,
    placeholder: 'Enter text...',
    type: 'text',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input')

    if (input) {
      input.dispatchEvent(new Event('input', { bubbles: true }))
    }
  },
}

export const Search: Story = {
  args: {
    ...defaultArgs,
    placeholder: 'Search',
    type: 'search',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input')

    if (input) {
      input.dispatchEvent(new Event('input', { bubbles: true }))
    }
  },
}

export const Password: Story = {
  args: {
    ...defaultArgs,
    label: 'Password',
    placeholder: 'Enter password...',
    type: 'password',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input')
    const iconEye = canvasElement.querySelector('.iconEye')

    debugger

    if (iconEye && input) {
      const clickEvent = new MouseEvent('click', { bubbles: true })

      iconEye.dispatchEvent(clickEvent)
    }
  },
}

export const Error: Story = {
  args: {
    ...defaultArgs,
    error: true,
    helperText: 'Error',
    placeholder: 'Enter text...',
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input')

    if (input) {
      input.dispatchEvent(new Event('input', { bubbles: true }))
    }
  },
}
