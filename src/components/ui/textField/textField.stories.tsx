import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './textField'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {
    helperText: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'search'],
      },
    },
    onSearchIconClick: action('search'),
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
    type: 'text',
    placeholder: 'Enter text...',
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
    type: 'search',
    placeholder: 'Search',
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
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password...',
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
